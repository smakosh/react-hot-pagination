# react-hot-pagination

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
| range            | 2       | {number}                  | TBD                                                         |
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

## Todo

- [ ] Add more examples

## Support

If you love this React component and want to support me, you can do so through my Patreon or GitHub sponsors.

[![Support me on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
