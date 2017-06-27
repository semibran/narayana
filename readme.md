# narayana
![1,6,6,1 noncrossing partitions with 1,2,3,4 blocks of a 4-element set](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Noncrossing_partitions_4%3B_Hasse.svg/220px-Noncrossing_partitions_4%3B_Hasse.svg.png)

A small function for calculating [Narayana numbers](https://en.wikipedia.org/wiki/Narayana_number).

## usage
[![NPM](https://nodei.co/npm/narayana.png?mini)](https://www.npmjs.com/package/narayana)
```js
> const narayana = require('narayana')
> var n = 4
> [1, 2, 3, 4].map(k => narayana(n, k))
[ 1, 6, 6, 1 ]
```

## see also
- [`semibran/catalan`](https://github.com/semibran/catalan) - calculate Catalan numbers
- [`semibran/delannoy`](https://github.com/semibran/delannoy) - calculate Delannoy numbers
- [`semibran/motzkin`](https://github.com/semibran/motzkin) - calculate Motzkin numbers
- [`semibran/schroeder`](https://github.com/semibran/schroeder) - calculate Schröder numbers

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
