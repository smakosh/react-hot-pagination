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
  return <Paginate {...args} />;
};

export const Paginate = ({
  range = 2,
  total,
  current,
  handlePagination,
  components,
  hideLeftArrow = false,
  hideRightArrow = false,
}: Props) => {
  // from an anonymous contributor
  function* paginationGen() {
    let i = 1;
    let left = Math.max(1, current - range);
    let right = Math.min(total, current + range);

    // Is the current index displayable
    const shouldDisplay = (at: number) => {
      return at === 1 || at === total || (at >= left && at <= right);
    };

    // The next index I should jump to based on my current position
    const next = (at: number) => {
      if (at == 1 || at == total) return at + 1;
      if (at < left) return left;
      if (at > right) return total;
      return at + 1;
    };

    while (i <= total) {
      if (shouldDisplay(i)) {
        yield i;
      } else {
        yield '...';
      }
      i = next(i);
    }
  }

  const Container = components?.container ?? Wrapper;
  const LeftArrow = components?.leftArrow ?? ChevronIcon;
  const RightArrow = components?.rightArrow ?? ChevronIcon;
  const Separator = components?.separator ?? SeparatorIcon;
  const Button = components?.button ?? Square;

  return (
    <Container>
      {!hideLeftArrow && (
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
      )}
      {Array.from(paginationGen()).map((item, i) => {
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
      {!hideRightArrow && (
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
      )}
    </Container>
  );
};
