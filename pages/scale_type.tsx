import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'スケール一覧';
const pageText = '本アプリで対象にしているスケールの種類を一覧にしています。';
const headTitle = pageTitle + ' | ' + headerTitle;


// CSS in JS
const Main = styled.main`
    h2 {
        background: #eee;
        margin: 60px 0 20px;
        padding: 10px;
        border-radius: 3px;
    }
    h3 {
        margin: 40px 0 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #ddd;
    }
    figure {
        margin: 0 0 30px;
        img {
            width: 100%;
            box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
        }
    }
`;


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>

        <Header />
        <Main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2 id="scale_1_genre">スケールの分類</h2>
                <p>本アプリで扱うスケールはこちらのWikipediaページを対象にしました。</p>
                <p>※参考：<a href="https://ja.wikipedia.org/wiki/%E9%9F%B3%E9%9A%8E">音階 - Wikipedia</a></p>
                <p>タブ切り替えを設定する際に内容とボリュームで検討した結果、以下の4種類に分類にしました（Wikipediaとは少し異なる構成）。</p>
                <ul>
                    <li>
                        <a href="#tonality">調性に基づく音階</a>
                        <ul>
                            <li><a href="#basic_scale">基本スケール</a></li>
                            <li><a href="#major_scale">メジャー・スケール（チャーチ・モード）</a></li>
                            <li><a href="#natural_minor_scale">ナチュラル・マイナー・スケール</a></li>
                            <li><a href="#harmonic_minor_scale">ハーモニック・マイナー・スケール</a></li>
                            <li><a href="#melodic_minor_scale">メロディック・マイナー・スケール</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#europe_america">ヨーロッパ・アメリカの音階</a>
                        <ul>
                            <li><a href="#symmetrical_scale">シンメトリカル・スケール</a></li>
                            <li><a href="#pentatonic_blue_note_scale">ペンタトニック/ブルー・ノート・スケール</a></li>
                            <li><a href="#european_scale">ヨーロッパの音階</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#west_south_asia">西アジア・南アジアの音階</a>
                        <ul>
                            <li><a href="#arab_scale">アラブの音階</a></li>
                            <li><a href="#indian_scale">インドの音階</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#east_southeast_asia">東アジア・東南アジアの音階</a>
                        <ul>
                            <li><a href="#chinese_scale">中国の音階</a></li>
                            <li><a href="#classical_japanese_scale">日本の音階（古典邦楽）</a></li>
                            <li><a href="#modern_japanese_scale">日本の音階（明治以降）</a></li>
                            <li><a href="#indonesian_scale">インドネシアの音階</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section>
                <h2 id="tonality">調性に基づく音階</h2>
                <p>西洋音楽の「調性」の概念に基づいて作られた音階</p>
                <section>
                    <section>
                        <h3 id="basic_scale">基本スケール</h3>
                        <p>西洋音楽で確立されたスケールの中でも最も基本となるスケール。メジャー・スケールとマイナー・スケール（3種類）になる。すべて七音音階（オクターブに音程が7個）。</p>
                        <dl>
                            <dt>メジャー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 10, 12, 13<br />
                                1, 2, 3, 4, 5, 6, 7度の七音音階。Cキーでは全ての音階が白鍵になる。</p>
                                <figure>
                                    <img src="img/scale_1_01.jpg" alt="メジャー・スケール" />
                                </figure>
                            </dd>
                            <dt>ナチュラル・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 11, 13<br />
                                    3、6、7度（Cキーではミ、ラ、シ）がフラット（半音下げ）。</p>
                                <figure>
                                    <img src="img/scale_1_02.jpg" alt="ナチュラル・マイナー・スケール" />
                                </figure>
                            </dd>
                            <dt>ハーモニック・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 12, 13<br />
                                    3、6度（Cキーではミ、ラ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_03.jpg" alt="ハーモニック・マイナー・スケール" />
                                </figure>
                            </dd>
                            <dt>メロディック・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 10, 12, 13<br />
                                    3度（Cキーではミ）のみがフラット。</p>
                                <figure>
                                    <img src="img/scale_1_04.jpg" alt="メロディック・マイナー・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="major_scale">メジャー・スケール（チャーチ・モード）</h3>
                        <p>西洋音楽の教会旋法から作られたスケール。チャーチ・モードとも呼ばれる。</p>
                        <dl>
                            <dt>アイオニアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 10, 12, 13<br />
                                基本スケールのメジャー・スケールはこのスケール。Cキーでは全てが白鍵になる。</p>
                                <figure>
                                    <img src="img/scale_1_05.jpg" alt="アイオニアン・スケール" />
                                </figure>
                            </dd>
                            <dt>ドリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 10, 11, 13<br />
                                3、7度（Cキーではミ、シ）がフラット。Dキー（レ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_1_06_1.jpg" alt="ドリアン・スケール-1" />
                                    <img src="img/scale_1_06_2.jpg" alt="ドリアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>フリジアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 8, 9, 11, 13<br />
                                2、3、6、7度（Cキーではレ、ミ、ラ、シ）がフラット。Eキー（ミ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_1_07_1.jpg" alt="フリジアン・スケール-1" />
                                    <img src="img/scale_1_07_2.jpg" alt="フリジアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>リディアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 7, 8, 10, 12, 13<br />
                                4度（Cキーではファ）がシャープ（半音上げ）。Fキー（ファ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_1_08_1.jpg" alt="リディアン・スケール-1" />
                                    <img src="img/scale_1_08_2.jpg" alt="リディアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>ミクソリディアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 10, 11, 13<br />
                                7度（Cキーではシ）がフラット。Gキー（ソ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_1_09_1.jpg" alt="ミクソリディアン・スケール-1" />
                                    <img src="img/scale_1_09_2.jpg" alt="ミクソリディアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>エオリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 11, 13<br />
                                3、６、7度（Cキーではミ、ラ、シ）がフラット。Aキー（ラ）では全て白鍵になる。基本スケールのナチュラル・マイナー・スケールと同じ構成音でもある。</p>
                                <figure>
                                    <img src="img/scale_1_10_1.jpg" alt="エオリアン・スケール-1" />
                                    <img src="img/scale_1_10_2.jpg" alt="エオリアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>ロクリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 7, 9, 11, 13<br />
                                2、3、5、６、7度（Cキーではレ、ミ、ソ、ラ、シ）がフラット。Bキー（シ）では全て白鍵になる。</p>
                                <figure>
                                    <img src="img/scale_1_11_1.jpg" alt="ロクリアン・スケール-1" />
                                    <img src="img/scale_1_11_2.jpg" alt="ロクリアン・スケール-2" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="natural_minor_scale">ナチュラル・マイナー・スケール</h3>
                        <p>メジャー・スケールの3度、6度、7度を半音下げたスケールだが、メジャースケールのAキー（ラ）から始めた構成音と同じになる（スケール名も同じ）。</p>
                        <dl>
                        <dt>エオリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 11, 13<br />
                                3、６、7度（Cキーではミ、ラ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_10_1.jpg" alt="エオリアン・スケール-1" />
                                </figure>
                            </dd>
                            <dt>ロクリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 7, 9, 11, 13<br />
                                2、3、5、６、7度（Cキーではレ、ミ、ソ、ラ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_11_1.jpg" alt="ロクリアン・スケール-1" />
                                </figure>
                            </dd>
                            <dt>アイオニアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 10, 12, 13<br />
                                基本スケールのメジャー・スケールはこのスケール。Cキーでは全て白鍵になる。</p>
                                <figure>
                                    <img src="img/scale_1_05.jpg" alt="アイオニアン・スケール" />
                                </figure>
                            </dd>
                            <dt>ドリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 10, 11, 13<br />
                                3、7度（Cキーではミ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_06_1.jpg" alt="ドリアン・スケール-1" />
                                </figure>
                            </dd>
                            <dt>フリジアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 8, 9, 11, 13<br />
                                2、3、6、7度（Cキーではレ、ミ、ラ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_07_1.jpg" alt="フリジアン・スケール-1" />
                                </figure>
                            </dd>
                            <dt>リディアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 7, 8, 10, 12, 13<br />
                                4度（Cキーではファ）がシャープ（半音上げ）。</p>
                                <figure>
                                    <img src="img/scale_1_08_1.jpg" alt="リディアン・スケール-1" />
                                </figure>
                            </dd>
                            <dt>ミクソリディアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 10, 11, 13<br />
                                7度（Cキーではシ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_09_1.jpg" alt="ミクソリディアン・スケール-1" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="harmonic_minor_scale">ハーモニック・マイナー・スケール</h3>
                        <p>メジャー・スケールの3度、6度を半音下げたスケール（ナチュラル・マイナー・スケールの♭7度を半音上げたスケール）。</p>
                        <dl>
                            <dt>ハーモニック・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 12, 13<br />
                                3、6度（Cキーではミ、ラ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_03.jpg" alt="ハーモニック・マイナー・スケール" />
                                </figure>
                            </dd>
                            <dt>ロクリアン♮6・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 7, 10, 11, 13<br />
                                2、3、5、7度（Cキーではレ、ミ、ソ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_12.jpg" alt="ロクリアン♮6・スケール" />
                                </figure>
                            </dd>
                            <dt>アイオニアン♯5・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 9, 10, 12, 13<br />
                                5度（Cキーではソ）がシャープ。</p>
                                <figure>
                                    <img src="img/scale_1_13.jpg" alt="アイオニアン♯5・スケール" />
                                </figure>
                            </dd>
                            <dt>ドリアン♯4・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 7, 8, 10, 11, 13<br />
                                3、7度（Cキーではミ、シ）がフラット、4度（Cキーではファ）がシャープ。</p>
                                <figure>
                                    <img src="img/scale_1_14.jpg" alt="ドリアン♯4・スケール" />
                                </figure>
                            </dd>
                            <dt>ハーモニック・マイナー・パーフェクト5th・ビロウ・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 5, 6, 8, 9, 11, 13<br />
                                2、6、7度（Cキーではレ、ソ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_15.jpg" alt="ハーモニック・マイナー・パーフェクト5th・ビロウ・スケール" />
                                </figure>
                            </dd>
                            <dt>リディアン♯2・スケール</dt>
                            <dd>
                                <p>構成音：1, 4, 5, 7, 8, 10, 12, 13<br />
                                2、4度（Cキーではレ、ファ）がシャープ。</p>
                                <figure>
                                    <img src="img/scale_1_16.jpg" alt="リディアン♯2・スケール" />
                                </figure>
                            </dd>
                            <dt>スーパー・ロクリアン♭7・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 5, 7, 9, 10, 13<br />
                                2、3、4、5、6度（Cキーではレ、ミ、ファ、ソ、ラ）がフラット、7度（Cキーではシ）がダブルフラット（全音下げ）。</p>
                                <figure>
                                    <img src="img/scale_1_17.jpg" alt="スーパー・ロクリアン♭7・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="melodic_minor_scale">メロディック・マイナー・スケール</h3>
                        <p>メジャー・スケールの3度のみを半音下げたスケール（ナチュラル・マイナー・スケールの♭6度、♭7度を半音上げたスケール）。</p>
                        <dl>
                            <dt>メロディック・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 10, 12, 13<br />
                                    3度（Cキーではミ）のみがフラット。</p>
                                <figure>
                                    <img src="img/scale_1_04.jpg" alt="メロディック・マイナー・スケール" />
                                </figure>
                            </dd>
                            <dt>ドリアン♭2・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 8, 10, 11, 13<br />
                                2、3、7度（Cキーではレ、ミ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_18.jpg" alt="ドリアン♭2・スケール" />
                                </figure>
                            </dd>
                            <dt>リディアン♯5・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 7, 9, 10, 12, 13<br />
                                4、5度（Cキーではファ、ソ）がシャープ。</p>
                                <figure>
                                    <img src="img/scale_1_19.jpg" alt="リディアン♯5・スケール" />
                                </figure>
                            </dd>
                            <dt>リディアン♭7・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 7, 8, 10, 11, 13<br />
                                4度（Cキーではファ）がシャープ、7度（Cキーではシ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_20.jpg" alt="リディアン♭7・スケール" />
                                </figure>
                            </dd>
                            <dt>ミクソリディアン♭6・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 9, 11, 13<br />
                                6、7度（Cキーではラ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_21.jpg" alt="ミクソリディアン♭6・スケール" />
                                </figure>
                            </dd>
                            <dt>エオリアン♭5・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 7, 9, 11, 13<br />
                                3、5、6、7度（Cキーではミ、ソ、ラ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_1_22.jpg" alt="エオリアン♭5・スケール" />
                                </figure>
                            </dd>
                            <dt>ロクリアン♭4・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 5, 7, 9, 11, 13<br />
                                1度以外=2、3、4、５、６、7度（Cキーではレ、ミ、ファ、ソ、ラ、シ）がフラットになる。</p>
                                <figure>
                                    <img src="img/scale_1_23.jpg" alt="ロクリアン♭4・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="europe_america">ヨーロッパ・アメリカの音階</h2>
                <p>規則的な法則によって作られた音階や、ヨーロッパ・アメリカの民族音階など。ここからオクターブごとの音階数が様々になる。</p>
                <section>
                    <section>
                        <h3 id="symmetrical_scale">シンメトリカル・スケール</h3>
                        <p>規則的な法則によって人口的に作られたスケール。</p>
                        <dl>
                            <dt>ホールトーン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 7, 9, 11, 13<br />
                                1, 2, 3, #4, b6, b7度の七音音階。4度（Cキーではファ）がシャープ、6、7度（Cキーではラ、シ）がフラット。全て音程が全音のスケール。</p>
                                <figure>
                                    <img src="img/scale_2_01.jpg" alt="ホールトーン・スケール" />
                                </figure>
                            </dd>
                            <dt>ディミニッシュト・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 7, 9, 10, 12, 13<br />
                                1, 2, b3, 4, b5, #5, 6, 7度の八音音階。3、5度（Cキーではミ、ソ）がフラットだが、それとは別に5度（Cキーではソ）のシャープもある。すべての音程が全音・半音の規則的なスケール。</p>
                                <figure>
                                    <img src="img/scale_2_02.jpg" alt="ディミニッシュト・スケール" />
                                </figure>
                            </dd>
                            <dt>コンビネーション・オブ・ディミニッシュト・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 5, 7, 8, 10, 11, 13<br />
                                1, b2, b3, b4, b5, 5, 6, b7度の八音音階。2、3、4、5、7度（Cキーではレ、ミ、ファ、ソ、シ）がフラットだが、それとは別にナチュラルの5度（Cキーではソ）もある。すべての音程が半音・全音という規則的なスケール。</p>
                                <figure>
                                    <img src="img/scale_2_03.jpg" alt="コンビネーション・オブ・ディミニッシュト・スケール" />
                                </figure>
                            </dd>
                            <dt>クロマティック・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13<br />
                                1, #1, 2, #2, 3, 4, #4, 5, #5, 6, #6, 7度の十二音音階。すべて音程が半音のスケール。</p>
                                <figure>
                                    <img src="img/scale_2_04.jpg" alt="クロマティック・スケール" />
                                </figure>
                            </dd>
                            <dt>シンメトリック・オーギュメント・スケール</dt>
                            <dd>
                                <p>構成音：1, 4, 5, 8, 9, 12, 13<br />
                                1, b3, 3, 5, #5, 7度の六音音階。3度（Cキーではミ）がフラット、5度（Cキーではソ）のシャープだが、それとは別にナチュラルの3、5度（Cキーではミ、ソ）がある。すべての音程が短3度（全音+半音）・半音という規則的なスケール。</p>
                                <figure>
                                    <img src="img/scale_2_05.jpg" alt="シンメトリック・オーギュメント・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="pentatonic_blue_note_scale">ペンタトニック/ブルー・ノート・スケール</h3>
                        <p>ペンタトニックは数字の「5」を表す名前の通り五音音階。世界のさまざまな民族音階とも共通するスケール。そこから発展したブルース・スケール、ブルー・ノート・スケールもここでまとめる。</p>
                        <dl>
                            <dt>マイナー・ペンタトニック・スケール</dt>
                            <dd>
                                <p>構成音：1, 4, 6, 8, 11, 13<br />
                                1, b3, 4, 5, b7度の五音音階。3、7度（Cキーではミ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_2_06.jpg" alt="マイナー・ペンタトニック・スケール" />
                                </figure>
                            </dd>
                            <dt>メジャー・ペンタトニック・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 8, 10, 13<br />
                                1, 2, 3, 5, 6度の五音音階。Cキーではすべてが白鍵になる。</p>
                                <figure>
                                    <img src="img/scale_2_07.jpg" alt="メジャー・ペンタトニック・スケール" />
                                </figure>
                            </dd>
                            <dt>メジャー・ブルース・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 5, 8, 10, 13<br />
                                1, 2, b3, 3, 5, 6度の六音音階。メジャー・ペンタトニック・スケールに3度（Cキーではミ）のフラットの音を加えたスケール。</p>
                                <figure>
                                    <img src="img/scale_2_08.jpg" alt="メジャー・ブルース・スケール" />
                                </figure>
                            </dd>
                            <dt>マイナー・ブルース・スケール</dt>
                            <dd>
                                <p>構成音：1, 4, 6, 7, 8, 11, 13<br />
                                1, b3, 4, b5, 5, b7度の六音音階。マイナー・ペンタトニック・スケールに5度（Cキーではソ）のフラットを加えたスケール。</p>
                                <figure>
                                    <img src="img/scale_2_09.jpg" alt="マイナー・ブルース・スケール" />
                                </figure>
                            </dd>
                            <dt>ブルー・ノート・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13<br />
                                1, 2, b3, 3, 4, b5, 5, 6, b7, 7度の十音音階。メジャー・スケールに3、5、7度（Cキーではミ、ソ、シ）のフラットを加えたスケール。</p>
                                <figure>
                                    <img src="img/scale_2_10.jpg" alt="ブルー・ノート・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="european_scale">ヨーロッパの音階</h3>
                        <p>西洋音楽の中で調性の基づくスケールが生まれる以前から存在した民族音階。</p>
                        <dl>
                            <dt>ハンガリー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 7, 8, 9, 12, 13<br />
                                1, 2, b3, #4, 5, 6b, 7度の七音音階。ハーモニック・マイナー・スケールの4度（Cキーではファ）をシャープにしたスケール</p>
                                <figure>
                                    <img src="img/scale_2_11.jpg" alt="ハンガリー・スケール" />
                                </figure>
                            </dd>
                            <dt>ジプシー・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 5, 6, 8, 9, 12, 13<br />
                                1, b2, 3, 4, 5, b6, 7度の七音音階。ハーモニック・マイナー・パーフェクト5th・ビロウ・スケールの7度（Cキーではシ）をナチュラルにしたスケール。</p>
                                <figure>
                                    <img src="img/scale_2_12.jpg" alt="ジプシー・スケール" />
                                </figure>
                            </dd>
                            <dt>スパニッシュ・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 5, 6, 8, 9, 11, 13<br />
                                1, b2, 3, 4, 5, b6, b7度の七音音階。2、6、7度（Cキーではレ、ラ、シ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_2_13.jpg" alt="スパニッシュ・スケール" />
                                </figure>
                            </dd>
                            <dt>スパニッシュ・8ノート・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 5, 6, 8, 9, 11, 13<br />
                                1, b2, b3, 3, 4, 5, b6, b7度の八音音階。スパニッシュ・スケールに3度（Cキーではミ）のフラットを加えたスケール。フリジアン・スケールに3度のナチュラルを加えたスケールでもある。</p>
                                <figure>
                                    <img src="img/scale_2_14.jpg" alt="スパニッシュ・8ノート・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="west_south_asia">西アジア・南アジアの音階</h2>
                <p>アラブやインドの民族音階。</p>
                <section>
                    <section>
                        <h3 id="arab_scale">アラブの音階</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x度のx音音階。x、x、x度（Cキーではx、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_3_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="indian_scale">インドの音階</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x度のx音音階。x、x、x度（Cキーではx、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_3_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="east_southeast_asia">東アジア・東南アジアの音階</h2>
                <p>中国、日本、インドネシアの民族音階。</p>
                <section>
                    <section>
                        <h3 id="chinese_scale">中国の音階</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x度のx音音階。x、x、x度（Cキーではx、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_4_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="classical_japanese_scale">日本の音階（古典邦楽）</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x度のx音音階。x、x、x度（Cキーではx、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_4_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="modern_japanese_scale">日本の音階（明治以降）</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x度のx音音階。x、x、x度（Cキーではx、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_4_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="indonesian_scale">インドネシアの音階</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x度のx音音階。x、x、x度（Cキーではx、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_4_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;