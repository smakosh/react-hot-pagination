import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Paginate, Props } from '../src';

const meta: Meta = {
  title: 'Paginate component',
  component: Paginate,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [current, setCurrent] = useState(1);

  const handlePagination = (value: number) => setCurrent(value);

  return (
    <Paginate
      current={current}
      handlePagination={handlePagination}
      range={args.range}
      total={args.total}
      components={args.components}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  range: 2,
  total: 30,
  current: 1,
  components: {},
};
