import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'このアプリについて';
const pageText = 'いろいろなスケール（音階）の構成音を確認でき、音も聴けるスケールプレイヤーです。キーの変更、スケールの変更による構成音の違いを調べることができます。';
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
                <h2>使い方</h2>
                <section>
                    <h3>用途</h3>
                    <p>下記のような用途に活用できます。</p>
                    <ul>
                        <li>スケール（音階）の構成音をテキストと鍵盤色で確認できます</li>
                        <li>再生ボタンでスケールの実際の音を聴くことができます</li>
                        <li>キーを変更すると、構成音がどう変わるかを確認できます</li>
                        <li>スケールの種類を変えると同じキーでの構成音の違いを比較できます</li>
                    </ul>
                </section>
                <section>
                    <h3>初期画面</h3>
                    <p>初期状態はメジャー・スケールで、キーはC（ド）です。色がついている鍵盤はスケールに含まれる音程です（押すと音が鳴ります）。</p>
                    <p>「構成音：」は鍵盤数（1オクターブ12個+2オクターブ目の頭1個で13個）の中でキー音から何番目の鍵盤がスケールに含まれるかを表示しています。「音階：」は現在のキーに該当する構成音の音程になります。</p>
                    <figure>
                        <img src="img/use_01.jpg" alt="初期画面" />
                    </figure>
                </section>
                <section>
                    <h3>スケールを鳴らす</h3>
                    <p>再生ボタンを押すと音を聴くことができます</p>
                    <figure>
                        <img src="img/use_02.jpg" alt="スケール再生" />
                    </figure>
                </section>
                <section>
                    <h3>キーの変更</h3>
                    <p>キーを変更すると別のキーの構成音がわかります。画面は「メジャー・スケール（E）」で白鍵黒鍵の組み合わせは変わっていますが、構成音（1, 3, 5, 6, 8, 10, 12, 13）は変わりません。</p>
                    <figure>
                        <img src="img/use_03.jpg" alt="メジャー・スケール（E）" />
                    </figure>
                </section>
                <section>
                    <h3>スケールの変更</h3>
                    <p>その下のスケールの種類を変更すると同じキーの別のスケールの構成音がわかります。画面は「ナチュラル・マイナー・スケール（E）」で構成音（1, 3, 4, 6, 8, 9, 11, 13）が変わっています。</p>
                    <figure>
                        <img src="img/use_04.jpg" alt="ナチュラル・マイナー・スケール（E）" />
                    </figure>
                    <p>タブを切り替えるとさらに別の種類のスケールが表示されます。画面は「東アジア・東南アジア」タブの中にある「琉球音階」です。</p>
                    <figure>
                        <img src="img/use_05.jpg" alt="琉球音階（C）" />
                    </figure>
                    <p>※スケールの詳細についてはこちらを参照→<a href="/scale_type">スケール一覧</a></p>
                </section>
            </section>
            <section>
                <h2>今後の課題</h2>
                <p>アラブの音階は「四分音」という1/4を上下にズラした音程があったが、Tone.jsの音程はピアノの十二音音階だったため、再現するのはシンプルではなさそうだった。個別の音にピッチを変えるエフェクトを加えるなどの検討が必要。</p>
                <ul>
                    <li><a href="https://ja.wikipedia.org/wiki/音階#アラブの音階">アラブの音階</a></li>
                    <li><a href="https://ja.wikipedia.org/wiki/マカーム">マカーム</a></li>
                    <li><a href="https://ja.wikipedia.org/wiki/四分音">四分音</a></li>
                    <li><a href="https://swarajtaka.com/ピアノにはない微分音の音楽って？/">ウード（フレットレスなアラブの弦楽器）</a></li>
                    <li><a href="https://twitter.com/rwiiug/status/1376600325725954057">「四分音」の音程（24平均律）</a></li>
                    <li><a href="https://soundquest.jp/quest/melody/melody-mv3/blue-note/">ブルーノートも微分音</a></li>
                </ul>
            </section>
            <section>
                <h2>詳細</h2>
                <section>
                    <h3>ブログ</h3>
                    <p><a href="https://www.i-ryo.com/entry/2021/11/28/153950">【React & Tone.js】スケールプレイヤーを作った（いろいろなスケールを調べて音も聴けるアプリ） - クモのようにコツコツと</a></p>
                </section>
                <section>
                    <h3>ソースコード（GitHub）</h3>
                    <p><a href="https://github.com/ryo-i/scale-player">リポジトリ</a></p>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;