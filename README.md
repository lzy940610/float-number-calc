## Introduction

Solve the accuracy problem of floating point calculation.

## Documentation


### Install

    npm install float-number-calc --save
    or
    npm i float-number-calc -S
    or
    yarn add float-number-calc
### Usage

```javascript
import calc from 'float-number-calc'

calc.add('0.01', '9.99')  // '10.00'
calc.sub('10.00', '9.99') // '0.01'
calc.mul('1.11', '9')     // '9.99'
calc.div('9.99', '1.11')  // '9'
```

### API

| 方法名 | 参数      | 说明     |
| ------ | --------- | -------- |
| add    | add(x, y) | 简单加法 |
| sub    | sub(x, y) | 简单减法 |
| mul    | mul(x, y) | 简单乘法 |
| div    | div(x, y) | 简单除法 |

### To do
>  ✅ ❌ ⌛️

- ✅ .md
- ✅ unit test
- ✅ test coverage
- ⌛️ CHANGELOG
- ⌛️ ESLint
- ⌛️ Git Commit Standard

## Issues

Please make sure to read the [Issue Reporting Checklist](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Changelog

Detailed changes for each release are documented in the release notes.

## Stay In Touch

- [Github](https://github.com/FloretPig/float-number-calc.git)


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, FloretPig
