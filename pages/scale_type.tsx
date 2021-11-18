import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'スケール一覧';
const pageText = '本アプリで用意しているスケールの種類を一覧にしています。';
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
                <h2 id="scale_genre">スケールの分類</h2>
                <p>本アプリで扱うページはこちらのWikipediaページを対象にしました。</p>
                <p>※参考：<a href="https://ja.wikipedia.org/wiki/%E9%9F%B3%E9%9A%8E">音階</a></p>
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
                        <p>西洋音楽で確立されたスケールの中でも最も基本となるスケール。メジャー・スケールとマイナー・スケール（3種類）になる。</p>
                        <dl>
                            <dt>メジャー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 10, 12, 13<br />
                                    Cキーでは全ての音階が白鍵になる。</p>
                                <figure>
                                    <img src="img/scale_01.jpg" alt="メジャー・スケール" />
                                </figure>
                            </dd>
                            <dt>ナチュラル・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 11, 13<br />
                                    3、6、7度（Cキーではミ、ラ、シ）がフラット（半音下げ）。</p>
                                <figure>
                                    <img src="img/scale_02.jpg" alt="ナチュラル・マイナー・スケール" />
                                </figure>
                            </dd>
                            <dt>ハーモニック・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 12, 13<br />
                                    3、6度（Cキーではミ、ラ）がフラット。</p>
                                <figure>
                                    <img src="img/scale_03.jpg" alt="ハーモニック・マイナー・スケール" />
                                </figure>
                            </dd>
                            <dt>メロディック・マイナー・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 10, 12, 13<br />
                                    3度（Cキーではミ）のみがフラット。</p>
                                <figure>
                                    <img src="img/scale_04.jpg" alt="メロディック・マイナー・スケール" />
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
                                    <img src="img/scale_05.jpg" alt="アイオニアン・スケール" />
                                </figure>
                            </dd>
                            <dt>ドリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 10, 11, 13<br />
                                3、7度（Cキーではミ、シ）がフラット。Dキー（レ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_06_1.jpg" alt="ドリアン・スケール-1" />
                                    <img src="img/scale_06_2.jpg" alt="ドリアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>フリジアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 8, 9, 11, 13<br />
                                2、3、6、7度（Cキーではレ、ミ、ラ、シ）がフラット。Eキー（ミ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_07_1.jpg" alt="フリジアン・スケール-1" />
                                    <img src="img/scale_07_2.jpg" alt="フリジアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>リディアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 7, 8, 10, 12, 13<br />
                                4度（Cキーではファ）がシャープ（半音上げ）。Fキー（ファ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_08_1.jpg" alt="リディアン・スケール-1" />
                                    <img src="img/scale_08_2.jpg" alt="リディアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>ミクソリディアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 5, 6, 8, 10, 11, 13<br />
                                7度（Cキーではシ）がフラット。Gキー（ソ）では全て白鍵になる</p>
                                <figure>
                                    <img src="img/scale_09_1.jpg" alt="ミクソリディアン・スケール-1" />
                                    <img src="img/scale_09_2.jpg" alt="ミクソリディアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>エオリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 3, 4, 6, 8, 9, 11, 13<br />
                                3、６、7度（Cキーではミ、ラ、シ）がフラット。Aキー（ラ）では全て白鍵になる。基本スケールのナチュラル・マイナー・スケールと同じ構成音でもある。</p>
                                <figure>
                                    <img src="img/scale_10_1.jpg" alt="エオリアン・スケール-1" />
                                    <img src="img/scale_10_2.jpg" alt="エオリアン・スケール-2" />
                                </figure>
                            </dd>
                            <dt>ロクリアン・スケール</dt>
                            <dd>
                                <p>構成音：1, 2, 4, 6, 7, 9, 11, 13<br />
                                2、3、5、６、7度（Cキーではレ、ミ、ソ、ラ、シ）がフラット。Bキー（シ）では全て白鍵になる。</p>
                                <figure>
                                    <img src="img/scale_11_1.jpg" alt="ロクリアン・スケール-1" />
                                    <img src="img/scale_11_2.jpg" alt="ロクリアン・スケール-2" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="natural_minor_scale">ナチュラル・マイナー・スケール</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="harmonic_minor_scale">ハーモニック・マイナー・スケール</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="melodic_minor_scale">メロディック・マイナー・スケール</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="europe_america">ヨーロッパ・アメリカの音階</h2>
                <p>xxx</p>
                <section>
                    <section>
                        <h3 id="symmetrical_scale">シンメトリカル・スケール</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="pentatonic_blue_note_scale">ペンタトニック/ブルー・ノート・スケール</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="european_scale">ヨーロッパの音階</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="west_south_asia">西アジア・南アジアの音階</h2>
                <p>xxx</p>
                <section>
                    <section>
                        <h3 id="arab_scale">アラブの音階</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
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
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="east_southeast_asia">東アジア・東南アジアの音階</h2>
                <p>xxx</p>
                <section>
                    <section>
                        <h3 id="chinese_scale">中国の音階</h3>
                        <p>xxx</p>
                        <dl>
                            <dt>xxx・スケール</dt>
                            <dd>
                                <p>構成音：x, x, x, x, x, x, x, x<br />
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
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
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
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
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
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
                                x、x、x度（キーがCの場合x、x、x）がフラット。</p>
                                <figure>
                                    <img src="img/scale_xx.jpg" alt="xxx・スケール" />
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