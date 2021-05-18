import React, { FC, HTMLAttributes } from 'react';
import ChevronIcon from './icons/ChevronIcon';
import SeparatorIcon from './icons/SeparatorIcon';
import { Navigate, Square, Wrapper } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  range?: number;
  total: number;
  handlePagination: (value: number) => void;
  current: number;
  hideLeftArrow?: boolean;
  hideRightArrow?: boolean;
  components: {
    container?: FC;
    button?: FC;
    rightArrow?: FC;
    leftArrow?: FC;
    separator?: FC;
  };
}

export const usePagination = (args: Props): JSX.Element => {
  return <Paginate {...args} />
}

export const Paginate = ({
  range = 2,
  total,
  current,
  handlePagination,
  components,
}: Props) => {
  // From https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
  const pagination = () => {
    const last = total;
    const left = current - range;
    const right = current + range + 1;
    const indices = [];
    const displayedPages = [];
    let l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        indices.push(i);
      }
    }

    for (const i of indices) {
      if (l) {
        if (i - l === 2) {
          displayedPages.push(l + 1);
        } else if (i - l !== 1) {
          displayedPages.push('...');
        }
      }
      displayedPages.push(i);
      l = i;
    }

    return displayedPages;
  };

  const Container = components?.container ?? Wrapper;
  const LeftArrow = components?.leftArrow ?? ChevronIcon;
  const RightArrow = components?.rightArrow ?? ChevronIcon;
  const Separator = components?.separator ?? SeparatorIcon;
  const Button = components?.button ?? Square;

  return (
    <Container>
      <Navigate
        type="button"
        onClick={() => handlePagination(current - 1)}
        disabled={current === 1}
      >
        {
          <LeftArrow
            color={current === 1 ? '#858585' : '#000'}
            position="left"
          />
        }
      </Navigate>
      {pagination().map((item, i) => {
        if (item === '...') {
          return <Separator key={i} />;
        }
        return (
          <Button
            key={i}
            type="button"
            disabled={item === current}
            onClick={() => handlePagination(Number(item))}
          >
            {item}
          </Button>
        );
      })}
      <Navigate
        type="button"
        onClick={() => handlePagination(current + 1)}
        disabled={current === Math.round(total)}
      >
        <RightArrow
          color={current === Math.round(total) ? '#858585' : '#000'}
          position="right"
        />
      </Navigate>
    </Container>
  );
};
