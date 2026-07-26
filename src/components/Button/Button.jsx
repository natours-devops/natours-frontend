import styled, { css } from 'styled-components';

const variants = {
  green: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  `,
  white: css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.bodyText};
  `,
  outline: css`
    background: none;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid currentColor !important;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGrey};
      color: ${({ theme }) => theme.colors.bodyText};
      border-color: ${({ theme }) => theme.colors.lightGrey};
      box-shadow: none;
      transform: none;
    }
  `,
};

const StyledButton = styled.button`
  font-size: ${({ $small }) => ($small ? '1.4rem' : '1.6rem')};
  padding: ${({ $small }) => ($small ? '1.25rem 3rem' : '1.4rem 3rem')};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  backface-visibility: hidden;
  font-family: inherit;

  ${({ $variant }) => variants[$variant] || variants.green}

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.button};
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export default function Button({ children, variant = 'green', small = false, ...props }) {
  return (
    <StyledButton $variant={variant} $small={small} {...props}>
      {children}
    </StyledButton>
  );
}
