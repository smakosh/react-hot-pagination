import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Paginate, Props, usePagination } from '../src';

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

// Default template
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
      hideLeftArrow={args.hideLeftArrow}
      hideRightArrow={args.hideRightArrow}
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

// Template using the usePagination hook
const TemplateWithHook: Story<Props> = (args) => {
  const [current, setCurrent] = useState(1);

  const handlePagination = (value: number) => setCurrent(value);

  const pages = usePagination({
    range: args.range,
    total: args.total,
    current: current,
    components: args.components,
    handlePagination: handlePagination
  });

  return (
    <>
      { pages }
    </>
  );
};

export const WithHook = TemplateWithHook.bind({});

WithHook.args = {
  range: 2,
  total: 30,
  current: 1,
  components: {},
};