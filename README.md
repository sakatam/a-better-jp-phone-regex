a-better-jp-phone-regex  [![Build Status](https://travis-ci.org/sakatam/a-better-jp-phone-regex.png)](https://travis-ci.org/sakatam/a-better-jp-phone-regex)
=======================

a better (and not too explicit) set of regular expressions for japanese phone numbers based on ministry of internal affairs' spec (総務省).
http://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/q_and_a-2001aug.html

## fixed phones
    ^0(\d{1}-?\d{4}|\d{2}-?\d{3}|\d{3}-?\d{2}|\d{4}-?\d{1})-?\d{4}$

## mobile / PHS
    ^0[789]0-?\d{4}-?\d{4}$

## IP phones
    ^050-?\d{4}-?\d{4}$
