---
id: microbit
title: CHIRIMEN with micro:bit
sidebar_label: CHIRIMEN with micro:bit
---

<p align="right">Language: <a href="https://chirimen.org/chirimen-micro-bit/">Japanese</a>, <a href="https://translate.google.co.jp/translate?sl=ja&tl=en&u=https%3A%2F%2Fchirimen.org%2Fchirimen-micro-bit%2F">English (Google Translation)</a></p>

![CHIRIMEN with micro:bit](imgs/CHIRIMEN_MICROBIT.png "CHIRIMEN with micro:bit")

## 概要

[micro:bit](https://microbit.org/)を利用した[CHIRIMEN](https://chirimen.org/#about)の実装を公開しています。CHIRIMEN とはボードコンピュータの端子につないだセンサやアクチュエータを使用した(ブラウザ上で動作する)ウェブアプリを動作させる環境です。[WebGPIO](https://github.com/browserobo/WebGPIO)と[WebI2C](https://github.com/browserobo/WebI2C) API が使えるようになります。
micro:bit ではウェブラウザは(多分:-)動きませんが、Bluetooth を介して、PC 等で動くウェブブラウザ(Chrome など[webBluetooth](https://webbluetoothcg.github.io/web-bluetooth/)をサポートしたもの)と micro:bit を接続することで、CHIRIMEN 環境を構築します。
また、CHIRIMEN with micro:bit では、WebGPIO,WebI2C に加え、micro:bit が内蔵しているセンサーや LED をウェブアプリで使うことができる機能が追加されています。

## スタートアップガイド

- [こちらです](guidebooks/startup.md)

## Examples

以下のページに使用例を掲載します。

- [Examples](https://chirimen.org/chirimen-micro-bit/examples/)

## その他の情報

- [拡張機能](guidebooks/extendedFunctions.md)
- [CHIRIMEN for Raspberry Pi3 との差分](guidebooks/diff_rpi3.md)
- [システム構成の説明](guidebooks/systemConfiguration.md)

### 注記

この実装は、webGPIO だけを実装した[webGPIO-etc-on-microbit-via-webBluetooth](https://github.com/chirimen-oh/webGPIO-etc-on-microbit-via-webBluetooth)を前身として持ちます。しかし micro:bit のリソース上の制限から、この実装はそれとまったく異なるものになっています。
