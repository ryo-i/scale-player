import React, { useState, useEffect, useRef }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import * as Tone from 'tone';


// CSS in JS
const keyWidth = '37px'

const CoadPlayer = styled.div`
  color: #fff;
  #key {
    max-width: calc(${keyWidth} * 15);
    margin: 0 auto;
    overflow-x: scroll;
    .key_inner {
      background: #333;
      width: calc(${keyWidth} * 15);
      display: block;
      padding: 0 0 10px;
      position: relative;
      button {
        width: ${keyWidth};
        text-align: center;
        display: inline-block;
      }
      .w_key {
        background: #FFF;
        border: 1px solid #333;
        color: #000;
        padding:  90px 0 10px;
      }
      .b_key {
        position: absolute;
        z-index: 10;
        top: 0;
        margin: 0 -20px;
        padding: 0;
        background: #000;
        border: 1px solid #fff;
        border-top-width: 0;
        color: #fff;
        height: 75px;
      }
      .w_key.exclusion {
        background: #ccc;
      }
      .b_key.exclusion {
        background: #444;
      }
      .w_key.current {
        background: #edced2;
      }
      .b_key.current {
        background: #A63744;
      }
    }
  }

  #scale_text {
    margin: 15px 0;
    text-align: center;
    h2 {
      margin: 0 0 5px;
      font-size: 20px;
      color: #fff;
      line-height: 1.25;
    }
    p {
      margin: 0;
    }
  }

  #key_types,
  #scale_types {
    margin: 0 auto 10px;
    max-width: 700px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px 10px 0;
    text-align: left;
    dl {
      padding: 5px 0 0;
      display: flex;
      margin: 0;
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
      dt {
        font-weight: bold;
        width: 15%;
      }
      dd {
        margin: 0;
        display: inline-block;
        width: 85%;
        label {
          margin: 0 10px 10px 0;
          display: inline-block;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;


// Component
function Inner() {
  // Hooks
  const [synth, setSynth] = useState(null);
  const [chords, setChords] = useState(inner.keys);
  const [chord, setChord] = useState(['-']);
  const [keyType, setkeyType] = useState(inner.keyTypeButtons[0].keyTypeName);
  const [chordsInterval, setChordInterval] = useState('-');
  const [scaleValue, setScaleValue] = useState(inner.scaleTypes[0].scaleValue);
  const [scaleName, setScaleName] = useState(inner.scaleTypes[0].scaleName);
  const [scaleKeys, setScaleKeys] = useState(inner.scaleTypes[0].scaleKeys.join(','));
  const keyElement = useRef<HTMLInputElement>(null);


  // オブジェクト設定
  interface scaleTypes {
    scaleValue: string;
    scaleName: string;
    scaleKeys: number[];
  };

  interface keyButtons {
    value: string;
    className: string;
    onClick: boolean;
    keyName: string;
  };

  interface keyTypeButtons {
    value: string;
    keyTypeName: string;
    defaultChecked: boolean;
  };

  interface scaleTypeButtons {
    id: string;
    value: string;
    scaleTypeName: string;
    defaultChecked: boolean;
  };


  // シンセ設定
  useEffect(() => {
    setSynth(new Tone.PolySynth().toDestination());
  },[]);


  // 鍵盤リセット
  const resetKey = (): void => {
    const keyElements: HTMLCollection = keyElement.current.children;
    for (let i = 0; i < keyElements.length; i++) {
      if (keyElements[i].classList.contains('current')) {
        keyElements[i].classList.remove('current');
      }
    }
  };


  // 鍵盤カレント
  const currentKey = (currentChord): void => {
    const keyElements: HTMLCollection = keyElement.current.children;
    for (let i = 0; i < keyElements.length; i++) {
      const getKeyElement: HTMLButtonElement = keyElements[i] as HTMLButtonElement;
      const keyText: string = getKeyElement.value;
      if (currentChord.includes(keyText)) {
        keyElements[i].classList.add('current');
      }
    }
  };


  // 最新のコード取得
  const getChord = (key: string, chords: string[][]): string[] => {
    let getCurrentChord: string[];
    for (let i = 0 ; i < chords.length; i++) {
      if (chords[i].indexOf(key) === 0) {
        getCurrentChord = chords[i];
      }
    }
    return getCurrentChord;
  };


  // 鍵盤の構成音のテキスト取得
  const chordKeysText = (chord: string[]): string[] => {
    let chordKeysText: string[] = [];
    for (let i = 0; i < chord.length; i++) {
      const getChortText: string = chord[i].slice(0, -1);
      chordKeysText.push(getChortText);
    }
    return chordKeysText;
  };


  // 鍵盤クリックイベント
  const clickKey = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const eventTarget: HTMLButtonElement = e.target as HTMLButtonElement;
    const KeyValue: string = eventTarget.value;
    const getCurrentChord: string[] = getChord(KeyValue, chords);
    /* setChord(getCurrentChord);
    resetKey();
    currentKey(getCurrentChord);

    const getChordsIntervalsArray: string[] = chordKeysText(getCurrentChord);
    const getRootkey: string = getChordsIntervalsArray[0];
    const getChordsIntervals: string = getChordsIntervalsArray.join(', ');
    setRootKey(getRootkey);
    setChordInterval(getChordsIntervals); */

    synth.triggerAttackRelease(getCurrentChord, 0.4);
  };


  // スケールタイプ取得
  const getScaleTypes = (getScaleValue: string): scaleTypes => {
    let getScaleTypes: scaleTypes;
    for (let i = 0; i < inner.scaleTypes.length; i++) {
      if (inner.scaleTypes[i].scaleValue === getScaleValue) {
        getScaleTypes = inner.scaleTypes[i];
      }
    }
    return getScaleTypes;
  };


  // スケール取得
  const getScales = (scaleTypes: scaleTypes): string[][] => {
    let getScales: string[][] = [];
    for (let i = 0 ; i < inner.keys.length; i++) {
      getScales.push([]);
      for (var  j = 0; j < scaleTypes['scaleKeys'].length; j++){
        const key: string = inner.scale[i+scaleTypes['scaleKeys'][j]];
        getScales[i].push(key);
      }
    }
    return getScales;
  };


  // コード構成音変更
  const changeChordInterval = (currentChords: string[][]): void => {
    const getRoot: string = String(chord[0]);
    const getCurrentChord: string[] = getChord(getRoot, currentChords);
    resetKey();
    currentKey(getCurrentChord);

    const getChordsIntervalsArray: string[] = chordKeysText(getCurrentChord);
    const getChordsIntervals: string = getChordsIntervalsArray.join(', ');
    setChordInterval(getChordsIntervals);
  };


  //キー変更イベント
  const keyTypeSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const getKeyValue: string = e.target.value;
    const scaleArray: string[] = [];

    scaleArray.push(getKeyValue);
    const getKeyTypeName = chordKeysText(scaleArray);

    resetKey();
    currentKey(scaleArray);

    const getkey = getKeyTypeName[0];
    setkeyType(getkey);
    /* const getCurrentChordTypes: chordTypes = getChordTypes(getChordValue);
    setChordValue(getCurrentChordTypes.chordValue);
    setChordName(getCurrentChordTypes.chordName);
    setChordKeys(getCurrentChordTypes.chordKeys.join(', '));

    const getCurrentChords: string[][] = getChords(getCurrentChordTypes);
    setChords(getCurrentChords);
    if (rootKey !== '-') {
      changeChordInterval(getCurrentChords);
    } */
  }


  // スケール変更イベント
  const scaleTypeSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const getScaleValue: string = e.target.value;
    const getCurrentScaleTypes: scaleTypes = getScaleTypes(getScaleValue);
    setScaleValue(getCurrentScaleTypes.scaleValue);
    setScaleName(getCurrentScaleTypes.scaleName);
    setScaleKeys(getCurrentScaleTypes.scaleKeys.join(', '));

    const getCurrentChords: string[][] = getScales(getCurrentScaleTypes);
    setChords(getCurrentChords);
   /* if (keyType !== '-') {
      changeChordInterval(getCurrentChords);
    } */
  }


  // JSX
  return (
    <>
      <CoadPlayer>
        <div id="key">
          <div className="key_inner" ref={keyElement}>
            {inner.keyButtons.map((val: keyButtons) =>
              <button key={val.value} value={val.value} className={val.className}
              onClick={clickKey}>{val.keyName}</button>
            )}
          </div>
        </div>
        <div id="scale_type">
          <section id="scale_text">
            <h2 id="scale_type">{scaleValue}</h2>
            <p id="scale_keys">構成音: {scaleKeys}</p>
            <p id="scale_name">{keyType} {scaleName}: {chordsInterval}</p>
          </section>
          <div id="key_types">
            <dl id="root">
              <dt>キー</dt>
              <dd>
                {inner.keyTypeButtons.map((val: keyTypeButtons) =>
                  <label key={val.value}><input key={val.value} id={val.value} type="radio" name="key_type" value={val.value} onChange={keyTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.keyTypeName}</label>
                )}
              </dd>
            </dl>
          </div>
          <div id="scale_types">
            <dl id="triad">
              <dt>基本スケール</dt>
              <dd>
                {inner.scaleTypeButtons.BasicScale.map((val: scaleTypeButtons) =>
                  <label key={val.id}><input key={val.id} type="radio" id={val.id} name="scale_type" value={val.value} onChange={scaleTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.value}</label>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </CoadPlayer>
    </>
  );
}

export default Inner;
