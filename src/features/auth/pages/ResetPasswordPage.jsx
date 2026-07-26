import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useResetPassword } from '../hooks/usePasswordReset';
import { FormBox, FormHeading, StyledForm } from '../components/AuthForm';
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

export default function ResetPasswordPage() {
  const { token } = useParams();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { mutate: resetPwd, isPending } = useResetPassword();

  const onSubmit = (data) => resetPwd({ token, data });

  return (
    <>
      <Header />
      <Main>
        <FormBox>
          <FormHeading>Reset your password</FormHeading>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="New password"
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Min 8 characters' },
              })}
            />
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

            <Input
              label="Confirm new password"
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
              {isPending ? 'Resetting...' : 'Reset password'}
            </Button>
          </StyledForm>
        </FormBox>
      </Main>
      <Footer />
    </>
  );
}
