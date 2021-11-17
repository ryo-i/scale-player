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
                <p>xxx</p>
                <section>
                    <section>
                        <h3 id="basic_scale">基本スケール</h3>
                        <dl>
                            <dt>xxx</dt>
                            <dd>
                                <p>xxx</p>
                                <figure>
                                    <img src="img/xxx.jpg" alt="xxx" />
                                </figure>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3 id="major_scale">メジャー・スケール（チャーチ・モード）</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="natural_minor_scale">ナチュラル・マイナー・スケール</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="harmonic_minor_scale">ハーモニック・マイナー・スケール</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="melodic_minor_scale">メロディック・マイナー・スケール</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="europe_america">ヨーロッパ・アメリカの音階</h2>
                <p>xxx</p>
                <section>
                    <section>
                        <h3 id="symmetrical_scale">シンメトリカル・スケール</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="pentatonic_blue_note_scale">ペンタトニック/ブルー・ノート・スケール</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="european_scale">ヨーロッパの音階</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="west_south_asia">西アジア・南アジアの音階</h2>
                <p>xxx</p>
                <section>
                    <section>
                        <h3 id="arab_scale">アラブの音階</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="indian_scale">インドの音階</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                </section>
            </section>
            <section>
                <h2 id="east_southeast_asia">東アジア・東南アジアの音階</h2>
                <p>xxx</p>
                <section>
                    <section>
                        <h3 id="chinese_scale">中国の音階</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="classical_japanese_scale">日本の音階（古典邦楽）</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="modern_japanese_scale">日本の音階（明治以降）</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
                    </section>
                    <section>
                        <h3 id="indonesian_scale">インドネシアの音階</h3>
                        <dd>
                            <p>xxx</p>
                            <figure>
                                <img src="img/xxx.jpg" alt="xxx" />
                            </figure>
                        </dd>
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