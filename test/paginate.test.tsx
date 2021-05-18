import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Paginate } from '../stories/Paginate.stories';

const PaginateWrapper = () => {
  const [current, setCurrent] = useState(1);
  const handlePagination = (value: number) => setCurrent(value);

  return (
    <Paginate
      current={current}
      handlePagination={handlePagination}
      range={2}
      total={30}
      components={{}}
    />
  );
};

describe('Paginate', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<PaginateWrapper />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
