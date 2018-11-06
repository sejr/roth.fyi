---
templateKey: blog-post
status: draft
title: "Building a Programming Language with Rust: Grammars and Lexing"
date: 2018-11-01T14:25:30.878Z
description: >-
  This is the first post in a series about building a programming language with
  Rust. In this post, we introduce language grammars and use one to build a
  lexer (or tokenizer) that defines the syntax of our language.
tags:
  - rust
  - programming languages
featuredImage: /img/rust.png
---

# Introduction

The purpose of this series is to introduce the basic concepts of programming language design, and to demonstrate 
the implementation of these concepts using [Rust](https://www.rust-lang.org/). Whether you are curious about how programming languages work, 
want to make your own, or just want to learn more about Rust, it is my hope that you will find these articles useful.

I make the assumption that you have experience using one or more programming languages and understand common
language features like variables, loops, conditional statements, and functions. As depicted below in Figure 1, 
the goal of this particular post is to turn a file containing source code written in our language into a set of 
*Tokens* that will be used in later stages.

<figure>
    <img class="post-image" src="/img/compiler.svg" />
    <figcaption>Figure 1. The stages we will explore in this series; the focus of this post is highlighted in blue.</figcaption>
</figure>

## Interpreter or compiler?

If you've used a few programming languages, you probably know already that they can either be interpreted or compiled.
**A *compiler* translates a program into machine code before it can be executed, whereas an *interpreter* executes the
source code directly.**

There are trade-offs to each tool, which we will talk about later. **However, it is important to know that a compiler 
or an interpreter can be created for any language.** In this series, I plan to implement both. Referring back to 
Figure 1, the *Execution Engine* stage is where we will implement the interpreter, and *Code Generation* stage 
is where we will implement the compiler.

## Why Rust?

The tools we build in this series can be written in any programming language. However, I have chosen Rust because I have
experience with it, and more importantly, I enjoy using it.

That said, we aren't going to be programming just yet. First we are going to learn about grammars.

# Grammars

The *grammar* for a programming language is essentially a formal specification of its syntax. It can be looked at as 
the single source of truth when it comes to the syntax of a language. Let's just look at very basic one:

```
<ArithmeticExpression> := NUMBER
<ArithmeticExpression> := ( <ArithmeticExpression> )
<ArithmeticExpression> := <ArithmeticExpression> + <ArithmeticExpression>
<ArithmeticExpression> := <ArithmeticExpression> - <ArithmeticExpression>
<ArithmeticExpression> := <ArithmeticExpression> * <ArithmeticExpression>
<ArithmeticExpression> := <ArithmeticExpression> / <ArithmeticExpression>
```

Each line is a single **production**, which maps a **nonterminal** symbol (e.g. `<ArithmeticExpression>`) 
to one or more combinations of nonterminals and/or **terminal** symbols, which cannot be simplified further. The terminal 
symbols in the example above include `NUMBER`, `(`, `)`, `+`, `-`, `*`, and `/`. 

You might think that this seems a little verbose, which is true. We can use the pipe (`|`) to quickly show alternate
productions for a given nonterminal, like so:

```
<ArithmeticExpression> := NUMBER
    | ( <ArithmeticExpression> )
    | <ArithmeticExpression> + <ArithmeticExpression>
    | <ArithmeticExpression> - <ArithmeticExpression>
    | <ArithmeticExpression> * <ArithmeticExpression>
    | <ArithmeticExpression> / <ArithmeticExpression>
```

You might already notice the *recursive* nature of a language grammar. Meaning, an arithmetic expression could 
be comprised of many smaller arithmetic expressions. Let's look at a pretty complicated arithmetic expression and
see how it adheres to our grammar.

<figure>
    <img class="post-image" src="/img/expr.svg" />
    <figcaption>Figure 2. Tree structure showing nested arithmetic expressions.</figcaption>
</figure>

In this tree, each blue node represents a valid `<ArithmeticExpression>`, and starting from the leaves, they are
composed until the node at the root represents the entire expression. 

That's great, but programming languages
are a little more complicated than basic math, right? Let's think about how we want our language to look, and
use that to drive the development of our grammar.

<div style="display: flex; justify-content: center; margin: 100px 0">
    <img src="/img/iron.svg" />
</div>

# Introducing Iron

The language that I want to build is inspired by Rust, Python 3, and TypeScript. I have decided to call it Iron because
that gives

```

```

## Variable Assignment

## If-Else Statements

## For and While Loops

# Lexing

Consider the following Rust code:

```rust
fn main() {
    println!("Hello world!");
}
```

This is a very basic program that prints `Hello world!` when it is compiled and executed. To do that,
you would want to put it inside a file such as `main.rs` and run the Rust compiler, `cargo`. Cargo
does its magic and, almost immediately, you see the text appear as expected.

# Introducing Iron

# Further Reading

* https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form
* https://www.cs.rochester.edu/~nelson/courses/csc_173/grammars/cfg.html
* https://docs.python.org/3/reference/grammar.html
* https://github.com/frenchy64/typescript-parser/blob/master/typescript.ebnf