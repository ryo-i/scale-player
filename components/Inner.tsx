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
        &:hover {
          cursor: pointer;
        }
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
    .start_button {
      margin: 0 5px 0 0;
      padding: 0;
      width: 25px;
      height: 20px;
      font-size: 10px;
      font-family: inherit;
      border-radius: 5px;
      border: 1px solid #fff;
      background: #000;
      color : #fff;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
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
            opacity: 0.8;
            cursor: pointer;
          }
        }
        .w_key {
          font-weight: bold;
        }
        .b_key {
          font-weight: lighter;
          color: #999;
        }
      }
    }
  }
`;


// Component
function Inner() {
  // Hooks
  const [synth, setSynth] = useState(null);
  const [scales, setScales] = useState([]);
  const [scale, setScale] = useState(['-']);
  const [keyValue, setKeyValue] = useState(inner.keyTypeButtons[0].value);
  const [keyType, setKeyType] = useState(inner.keyTypeButtons[0].keyTypeName);
  const [scaleInterval, setScaleInterval] = useState('-');
  const [scaleValue, setScaleValue] = useState(inner.scaleTypes[0].scaleValue);
  const [scaleKeys, setScaleKeys] = useState(inner.scaleTypes[0].scaleKeys.join(', '));
  const [scaleName, setScaleName] = useState(inner.scaleTypeButtons.basicScale[0].scaleName);
  const keyElement = useRef<HTMLInputElement>(null);


  // オブジェクト設定
  interface scaleTypes {
    scaleValue: string;
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
    className: string;
    defaultChecked: boolean;
  };

  interface scaleTypeButtons {
    scaleValue: string;
    scaleName: string;
    defaultChecked: boolean;
  };


  // シンセ設定
  useEffect(() => {
    setSynth(new Tone.Synth().toDestination());
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
  const currentKey = (currentScale): void => {
    const keyElements: HTMLCollection = keyElement.current.children;
    for (let i = 0; i < keyElements.length; i++) {
      const getKeyElement: HTMLButtonElement = keyElements[i] as HTMLButtonElement;
      const keyText: string = getKeyElement.value;
      if (currentScale.includes(keyText)) {
        keyElements[i].classList.add('current');
      }
    }
  };


  // 最新のスケール取得
  const getScale = (key: string, scales: string[][]): string[] => {
    let getCurrentScale: string[];
    for (let i = 0 ; i < scales.length; i++) {
      if (scales[i].indexOf(key) === 0) {
        getCurrentScale = scales[i];
      }
    }
    return getCurrentScale;
  };


  // 鍵盤の構成音のテキスト取得
  const scaleKeysText = (scale: string[]): string[] => {
    let scaleKeysText: string[] = [];
    for (let i = 0; i < scale.length; i++) {
      const getScaleText: string = scale[i].slice(0, -1);
      scaleKeysText.push(getScaleText);
    }
    return scaleKeysText;
  };


  // 鍵盤クリックイベント
  const clickKey = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const eventTarget: HTMLButtonElement = e.target as HTMLButtonElement;
    const KeyValue: string = eventTarget.value;
    synth.triggerAttackRelease(KeyValue, 0.4);
  };


  // 再生ボタン
  let changeScalePlay = (): void => {
    Tone.Transport.stop();
    Tone.Transport.cancel();

    const currentScale = scale;
    const synth = new Tone.Synth().toDestination();
    const seq = new Tone.Sequence((time, note) => {
      synth.triggerAttackRelease(note, '8n', time);
    }, currentScale).start(0);
    seq.loop = false;
    Tone.Transport.bpm.value = 80;

    Tone.Transport.start();
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


  // スケール構成音変更
  const changeScaleInterval = (currentScales: string[][]): void => {
    const getCurrentScale: string[] = getScale(keyValue, currentScales);
    setScale(getCurrentScale);
    resetKey();
    currentKey(getCurrentScale);

    const getScalesIntervalsArray: string[] = scaleKeysText(getCurrentScale);
    const getScalesIntervals: string = getScalesIntervalsArray.join(', ');
    setScaleInterval(getScalesIntervals);
  };


  // スケール初期設定
  useEffect(() => {
    const getCurrentScaleTypes: scaleTypes = getScaleTypes(scaleValue);
    const getCurrentScales: string[][] = getScales(getCurrentScaleTypes);
    setScales(getCurrentScales);
    setScale(getCurrentScales[0]);
    changeScaleInterval(getCurrentScales);
  },[]);


  // キー変更イベント
  const keyTypeSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const getKeyValue: string = e.target.value;
    setKeyValue(getKeyValue);

    const scaleArray: string[] = [];
    scaleArray.push(getKeyValue);
    const getKeyTypeName = scaleKeysText(scaleArray);
    const getkey = getKeyTypeName[0];
    setKeyType(getkey);

    const getCurrentScale: string[] = getScale(getKeyValue, scales);
    setScale(getCurrentScale);
    resetKey();
    currentKey(getCurrentScale);

    const getScalesIntervalsArray: string[] = scaleKeysText(getCurrentScale);
    const getKeyType: string = getScalesIntervalsArray[0];
    const getScalesIntervals: string = getScalesIntervalsArray.join(', ');
    setKeyType(getKeyType);
    setScaleInterval(getScalesIntervals);
  }


  // スケール変更イベント
  const scaleTypeSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const getScaleValue: string = e.target.value;
    const getCurrentScaleTypes: scaleTypes = getScaleTypes(getScaleValue);
    const getScaleName: string = e.target.dataset.scaleName;
    setScaleValue(getCurrentScaleTypes.scaleValue);
    setScaleKeys(getCurrentScaleTypes.scaleKeys.join(', '));
    setScaleName(getScaleName);

    const getCurrentScales: string[][] = getScales(getCurrentScaleTypes);
    setScales(getCurrentScales);
    changeScaleInterval(getCurrentScales);
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
            <h2 id="scale_type">{scaleName}（{keyType}）</h2>
            <p id="scale_keys">構成音：{scaleKeys}</p>
            <p id="scale_name"><button value="start" className="start_button" onClick={changeScalePlay}>▶︎</button>音階：{scaleInterval}</p>
          </section>
          <div id="key_types">
            <dl id="root">
              <dt>キー</dt>
              <dd>
                {inner.keyTypeButtons.map((val: keyTypeButtons) =>
                  <label key={val.value} className={val.className}><input key={val.value} type="radio" name="key_type" value={val.value} onChange={keyTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.keyTypeName}</label>
                )}
              </dd>
            </dl>
          </div>
          <div id="scale_types">
            <dl id="basic_scale">
              <dt>基本スケール</dt>
              <dd>
                {inner.scaleTypeButtons.basicScale.map((val: scaleTypeButtons) =>
                  <label key={val.scaleValue}><input key={val.scaleValue} type="radio" name="scale_type" value={val.scaleValue} data-scale-name={val.scaleName} onChange={scaleTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.scaleName}</label>
                )}
              </dd>
            </dl>
            <dl id="major_scale">
              <dt>メジャー・スケール（チャーチ・モード）</dt>
              <dd>
                {inner.scaleTypeButtons.majorScale.map((val: scaleTypeButtons) =>
                  <label key={val.scaleValue}><input key={val.scaleValue} type="radio" name="scale_type" value={val.scaleValue} data-scale-name={val.scaleName} onChange={scaleTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.scaleName}</label>
                )}
              </dd>
            </dl>
            <dl id="natural_minor_scale">
              <dt>ナチュラル・マイナー・スケール</dt>
              <dd>
                {inner.scaleTypeButtons.naturalMinorScale.map((val: scaleTypeButtons) =>
                  <label key={val.scaleValue}><input key={val.scaleValue} type="radio" name="scale_type" value={val.scaleValue} data-scale-name={val.scaleName} onChange={scaleTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.scaleName}</label>
                )}
              </dd>
            </dl>
            <dl id="harmonic_minor_scale">
              <dt>ハーモニック・マイナー・スケール</dt>
              <dd>
                {inner.scaleTypeButtons.harmonicMinorScale.map((val: scaleTypeButtons) =>
                  <label key={val.scaleName}><input key={val.scaleName} type="radio" name="scale_type" value={val.scaleValue}  data-scale-name={val.scaleName} onChange={scaleTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.scaleName}</label>
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
