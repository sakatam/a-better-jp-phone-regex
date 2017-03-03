a-better-jp-phone-regex  [![Build Status](https://travis-ci.org/sakatam/a-better-jp-phone-regex.png)](https://travis-ci.org/sakatam/a-better-jp-phone-regex)
=======================

A set of regular expressions for japanese phone numbers based on ministry of internal affairs (総務省) spec.

総務省のスペックをベースにした、日本国内の電話番号にマッチする正規表現。ほどよい厳密さを目指しています。

http://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/q_and_a.html

## fixed phones - 固定電話 ##
    ^0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}$

## mobile / PHS - 携帯とPHS ##
    ^0[789]0-?\d{4}-?\d{4}$

## IP phones - IP電話 ##
    ^050-?\d{4}-?\d{4}$

## Combined - 合体バージョン ##
    ^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$


Usage - 使い方
=============

You can use "index.js" as a common JS module, but it would be way faster to just copy-paste the content of "Combined" section above.

一応Common JSモジュールですが、上記の Cimbined の中の文字列をコピーして使うのが一番簡単だと思います。
