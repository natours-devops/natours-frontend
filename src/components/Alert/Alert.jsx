import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { transform: translate(-50%, -100%); opacity: 0; }
  to   { transform: translate(-50%, 0);    opacity: 1; }
`;

const StyledAlert = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 1.6rem 15rem;
  box-shadow: ${({ theme }) => theme.shadows.alert};
  animation: ${slideDown} 0.3s ease;
  background-color: ${({ $type, theme }) =>
    $type === 'success' ? theme.colors.successGreen : theme.colors.errorRed};
`;

export default function Alert({ message, type = 'success' }) {
  if (!message) return null;
  return <StyledAlert $type={type}>{message}</StyledAlert>;
}
