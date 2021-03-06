tic-tac-toe
====

Overview

Reactの公式ドキュメントのチュートリアルを元に三目並べゲームを作成しました。

[React Tutorial](https://ja.reactjs.org/tutorial/tutorial.html)

## Description

### Tutorial basic functions

- 三目並べが遊べる
- 決着がついたときに表示ができる
- ゲーム進行にあわせて履歴が保存される
- 着手の履歴の見直しや盤面の以前の状態の参照ができる

### Tutorial additional functions

- 歴内のそれぞれの着手の位置を (col, row) というフォーマットで表示する。
- 着手履歴のリスト中で現在選択されているアイテムをボールドにする。
- Board でマス目を並べる部分を、ハードコーディングではなく 2 つのループを使用するように書き換える。
- 着手履歴のリストを昇順・降順いずれでも並べかえられるよう、トグルボタンを追加する。
- どちらかが勝利した際に、勝利につながった 3 つのマス目をハイライトする。
- どちらも勝利しなかった場合、結果が引き分けになったというメッセージを表示する。

### Original additional functions

- next gameボタン追加
- 勝敗の成績表示

## Demo

- Xが勝利した場合

[![Image from Gyazo](https://i.gyazo.com/7ab96a42d407e39e45febbc934d40bcb.gif)](https://gyazo.com/7ab96a42d407e39e45febbc934d40bcb)

- 引き分けの場合

[![Image from Gyazo](https://i.gyazo.com/067db4c932c794616f2698c7c263565e.gif)](https://gyazo.com/067db4c932c794616f2698c7c263565e)
