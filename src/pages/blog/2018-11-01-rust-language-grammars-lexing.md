---
templateKey: blog-post
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

## Validating Statements

If you'd like to see a complete one, I would recommend looking at the [grammar for Python](https://docs.python.org/3/reference/grammar.html).

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