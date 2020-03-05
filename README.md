# JavaScript Scope Challenge

Scope is an important concept in JavaScript. Understanding it will let you write well-organised code that avoids bugs.

## What is scope?

Scope is the context a variable is available in. It defines what variables can be used at a each part of your code. There are two kinds of scope: global and local.

### Global scope

Everything at the "top-level" of your code is global. This means anything outside of functions or "blocks" like `if` statements.

The global scope is also shared across all normal script tags. This can be confusing as you can use variables that aren't previously referenced in a file at all.

### Local scope

Variables inside of functions or "blocks" are locally scoped. A block is created by curly brackets, like `if` statements.

Local variables are not visible or usuable outside of that function or block.

```js
function square(x) {
  return x * x;
}
console.log(x); // error!
```

### Nested scope

A local scope always has access to the scopes _above_ it.

```js
function square(x) {
  if (typeof x !== "number") {
    const error = `${x} should be a number`; // can see x as it is "above" this scope
    return error;
  }
  console.log(error); // error! cannot see error as it is in a "lower" scope
  return x * x;
}
```

Think of your code as a series of nested one-way mirrors: code can see out into the scopes above, but not further down.

### ES6

`var` is _not_ block scoped, whereas `let` and `const` are. `var` is still function scoped though.

```js
if (true) {
  var y = 2;
}
console.log(y); // 2
```

Generally you should always prefer `let` and `const`.

## Challenge

1. Clone this repo, then open `workshop/global/index.html` in your browser
1. You should see a JS error in the console
1. Fix this error by thinking about how variables are scoped
1. Fix every error that shows up until the app works like this:
