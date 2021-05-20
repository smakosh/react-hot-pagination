import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 0;

  *:not(:first-child):not(:nth-last-child(-n + 2)) {
    margin-right: 4px;
  }
`;

export const Square = styled.button`
  padding: 0px 12px;
  border: 1px solid #000;
  background: transparent;
  color: #000;
  border-radius: 6px;
  text-align: center;
  line-height: 32px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    border: 1px solid transparent;
    background: #7d7d7d;
    color: #000;
    cursor: not-allowed;
  }
`;

export const Navigate = styled.button`
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
  background: transparent;
  border: none;
  border-radius: 6px;
  border: 1px solid #000;
  cursor: pointer;

  &:first-of-type {
    margin-right: 12px;
  }

  &:last-of-type {
    margin-left: 12px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    align-self: center;
  }
`;
