---
templateKey: blog-post
title: Lexical Analysis in Rust
date: 2018-11-01T13:35:33.521Z
description: >-
  This is the first post in a series about building a programming language with
  Rust. In this post we introduce a context-free grammar and use it to build a
  "lexer," which allows us to validate the syntax of programs written in our
  language.
tags:
  - rust
  - programming languages
featuredImage: /img/rust.png
---
* Introduction
  * This series assumes you have experience writing programs with one or more programming languages. Throughout the series we will provide an introductory overview of what goes on behind the scenes.
  * To build a programming language, the first thing we want to consider is its syntax; that is, how the code will look. There are tons of different programming languages and syntax varies widely amongst them.
  * Include some examples:
    * https://learnxinyminutes.com/docs/common-lisp/
    * https://learnxinyminutes.com/docs/python/
    * https://learnxinyminutes.com/docs/rust/
* Context free grammars
  * What does that mean?
  * Example: Python's CFG
*
