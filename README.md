# react-hot-pagination
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-hot-pagination

## Example

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Paginate } from 'react-hot-pagination';

const App = () => {
  const [current, setCurrent] = React.useState(1);

  const handlePagination = (value: number) => setCurrent(value);

  return (
    <div>
      <Paginate
        current={current}
        handlePagination={handlePagination}
        range={2}
        total={30}
        components={{}}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Getting started

```bash
npm i react-hot-pagination
```

Or

```bash
yarn add react-hot-pagination
```

## Props

### Paginate

These docs are inspired by react-flex-ready docs

range
total
current

| Option           | Default | Type                      | Description                                                 |
| ---------------- | ------- | ------------------------- | ----------------------------------------------------------- |
| range            | 2       | {number}                  | Pages shown before after the current page                   |
| total            | 20      | {number}                  | Total pages                                                 |
| current          | 1       | {number}                  | Current page                                                |
| components       |         | {object}                  | your Button, Separator, LeftArrow and RightArrow components |
| handlePagination |         | {(value: number) => void} | Your custom handle function to update the current page      |

## Built with

- TSDX

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Myself](https://smakosh.com)
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Elbarae1921"><img src="https://avatars.githubusercontent.com/u/44276243?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Elbarae Rguig</b></sub></a><br /><a href="https://github.com/smakosh/react-hot-pagination/commits?author=Elbarae1921" title="Code">💻</a> <a href="https://github.com/smakosh/react-hot-pagination/commits?author=Elbarae1921" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/fdrissi"><img src="https://avatars.githubusercontent.com/u/43388336?v=4?s=100" width="100px;" alt=""/><br /><sub><b>DRISSI TOUBBALI Fadel</b></sub></a><br /><a href="https://github.com/smakosh/react-hot-pagination/commits?author=fdrissi" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Todo

- [ ] Add more examples

## Support

If you love this React component and want to support me, you can do so through my Patreon or GitHub sponsors.

[![Support me on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
