import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useForgotPassword } from '../hooks/usePasswordReset';
import { FormBox, FormHeading, StyledForm, FooterText } from '../components/AuthForm';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 8rem 6rem;
  flex: 1;
`;

const InfoText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-bottom: 3rem;
  line-height: 1.8;
`;

export default function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutate: sendReset, isPending, isSuccess } = useForgotPassword();

  const onSubmit = (data) => sendReset(data);

  return (
    <>
      <Header />
      <Main>
        <FormBox>
          <FormHeading>Forgot your password?</FormHeading>
          {isSuccess ? (
            <InfoText>
              ✅ We sent a password reset link to your email. Please check your inbox.
            </InfoText>
          ) : (
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <InfoText>
                Enter your email address and we&apos;ll send you a link to reset your password.
              </InfoText>
              <Input
                label="Email address"
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p style={{ color: '#eb4d4b', fontSize: '1.3rem', marginTop: '-1.5rem', marginBottom: '1.5rem' }}>
                  {errors.email.message}
                </p>
              )}
              <Button type="submit" disabled={isPending}>
                {isPending ? 'Sending...' : 'Send reset link'}
              </Button>
            </StyledForm>
          )}
          <FooterText>
            Remember your password? <Link to="/login">Log in</Link>
          </FooterText>
        </FormBox>
      </Main>
      <Footer />
    </>
  );
}
