import styled, { css } from 'styled-components';

export const HintSection = styled.section`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.white};
      padding: 8.5rem 0;
    `;
  }}
`;

export const Hint = styled.h5`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.black};
      text-align: center;
      font-size: 6rem;
    `;
  }}
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 1.875rem;
`;
