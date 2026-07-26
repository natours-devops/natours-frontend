import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $fullPage }) => ($fullPage ? '0' : '4rem')};
  ${({ $fullPage }) =>
    $fullPage &&
    `
    position: fixed;
    inset: 0;
    background-color: rgba(255,255,255,0.8);
    z-index: 9999;
  `}
`;

const Ring = styled.div`
  width: ${({ $size }) => $size || '5rem'};
  height: ${({ $size }) => $size || '5rem'};
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.lightGreyAlt};
  border-top-color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 0.7s linear infinite;
`;

export default function Spinner({ fullPage = false, size }) {
  return (
    <SpinnerWrapper $fullPage={fullPage}>
      <Ring $size={size} />
    </SpinnerWrapper>
  );
}
