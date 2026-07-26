import styled from 'styled-components';

const FormBox = styled.div`
  margin: 0 auto;
  max-width: 55rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.form};
  padding: 5rem 7rem;
  border-radius: ${({ theme }) => theme.borderRadius.loginForm};
`;

const FormHeading = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  background-image: ${({ theme }) => theme.gradients.primaryRight};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
  margin-bottom: 3.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FooterText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-top: 2rem;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    padding-bottom: 2px;
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export { FormBox, FormHeading, StyledForm, FooterText };
