a-better-jp-phone-regex  [![Build Status](https://travis-ci.org/sakatam/a-better-jp-phone-regex.png)](https://travis-ci.org/sakatam/a-better-jp-phone-regex)
=======================

A set of regular expressions for japanese phone numbers based on ministry of internal affairs (総務省) spec.
http://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/q_and_a-2001aug.html

## fixed phones ##
    ^0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}$

## mobile / PHS ##
    ^0[789]0-?\d{4}-?\d{4}$

## IP phones ##
    ^050-?\d{4}-?\d{4}$

## Combined ##
    ^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$
