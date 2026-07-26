import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
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

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.errorRed};
  font-size: 1.3rem;
  margin-top: -1.5rem;
  margin-bottom: 1.5rem;
`;

export default function SignupPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { mutate: signupUser, isPending } = useSignup();

  const onSubmit = (data) => {
    signupUser(data);
  };

  return (
    <>
      <Header />
      <Main>
        <FormBox>
          <FormHeading>Create your account</FormHeading>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Your name"
              id="name"
              type="text"
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}

            <Input
              label="Email address"
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}

            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Min 8 characters' } })}
            />
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

            <Input
              label="Confirm password"
              id="passwordConfirm"
              type="password"
              placeholder="••••••••"
              {...register('passwordConfirm', {
                required: 'Please confirm your password',
                validate: (val) => val === watch('password') || 'Passwords do not match',
              })}
            />
            {errors.passwordConfirm && <ErrorMsg>{errors.passwordConfirm.message}</ErrorMsg>}

            <Button type="submit" disabled={isPending}>
              {isPending ? 'Creating account...' : 'Sign up'}
            </Button>
          </StyledForm>
          <FooterText>
            Already have an account? <Link to="/login">Log in</Link>
          </FooterText>
        </FormBox>
      </Main>
      <Footer />
    </>
  );
}
