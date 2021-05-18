import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Paginate } from '../.';

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
