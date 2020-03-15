tic-tac-toe
====

Overview

Reactの公式ドキュメントのチュートリアルを元に三目並べゲームを作成しました。

[React Tutorial](https://ja.reactjs.org/tutorial/tutorial.html)

## Description

### Basic function

- 三目並べが遊べる
- 決着がついたときに表示ができる
- ゲーム進行にあわせて履歴が保存される
- 着手の履歴の見直しや盤面の以前の状態の参照ができる

### Additional function

- 歴内のそれぞれの着手の位置を (col, row) というフォーマットで表示する。
- 着手履歴のリスト中で現在選択されているアイテムをボールドにする。
- Board でマス目を並べる部分を、ハードコーディングではなく 2 つのループを使用するように書き換える。
- 着手履歴のリストを昇順・降順いずれでも並べかえられるよう、トグルボタンを追加する。
- どちらかが勝利した際に、勝利につながった 3 つのマス目をハイライトする。
- どちらも勝利しなかった場合、結果が引き分けになったというメッセージを表示する。

### Function to add in the future

- new gameボタン追加
- 勝敗の成績表示
- プレーヤーの先行後攻を変える

## Demo

[![Image from Gyazo](https://i.gyazo.com/8d132efeb4146b9be781ecfdd5720138.gif)](https://gyazo.com/8d132efeb4146b9be781ecfdd5720138)

引き分けの場合

[![Image from Gyazo](https://i.gyazo.com/f56d4643dfd0f32aeb44d0a432c560f4.gif)](https://gyazo.com/f56d4643dfd0f32aeb44d0a432c560f4)
