import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
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

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutate: loginUser, isPending } = useLogin();

  const onSubmit = (data) => loginUser(data);

  return (
    <>
      <Header />
      <Main>
        <FormBox>
          <FormHeading>Log into your account</FormHeading>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email address"
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p style={{ color: '#eb4d4b', fontSize: '1.3rem', marginTop: '-1.5rem', marginBottom: '1.5rem' }}>{errors.email.message}</p>}

            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Min 8 characters' } })}
            />
            {errors.password && <p style={{ color: '#eb4d4b', fontSize: '1.3rem', marginTop: '-1.5rem', marginBottom: '1.5rem' }}>{errors.password.message}</p>}

            <Button type="submit" disabled={isPending}>
              {isPending ? 'Logging in...' : 'Login'}
            </Button>
          </StyledForm>
          <FooterText>
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </FooterText>
          <FooterText>
            <Link to="/forgot-password">Forgot your password?</Link>
          </FooterText>
        </FormBox>
      </Main>
      <Footer />
    </>
  );
}
