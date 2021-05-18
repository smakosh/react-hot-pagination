import React from 'react';

type ChevronIconProps = {
  width?: number;
  height?: number;
  color?: string;
  position?: 'left' | 'right';
};

const DIRECTION = {
  left: 0,
  right: -180,
};

const ChevronIcon = ({
  width = 24,
  height = 24,
  color = '#000',
  position = 'left',
}: ChevronIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{
      transform: `rotate(${DIRECTION[position]}deg)`,
    }}
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export default ChevronIcon;
