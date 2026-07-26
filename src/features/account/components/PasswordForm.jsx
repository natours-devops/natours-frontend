import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useUpdatePassword } from '../hooks/useUpdatePassword';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.errorRed};
  font-size: 1.3rem;
  margin-top: -1.5rem;
  margin-bottom: 1.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function PasswordForm() {
  const { mutate: updatePassword, isPending } = useUpdatePassword();
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    updatePassword(
      {
        passwordCurrent: data.passwordCurrent,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      },
      { onSuccess: () => reset() }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Current password"
        id="passwordCurrent"
        type="password"
        placeholder="••••••••"
        {...register('passwordCurrent', { required: 'Current password is required' })}
      />
      {errors.passwordCurrent && <ErrorMsg>{errors.passwordCurrent.message}</ErrorMsg>}

      <Input
        label="New password"
        id="password"
        type="password"
        placeholder="••••••••"
        {...register('password', {
          required: 'New password is required',
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

      <ButtonRow>
        <Button type="submit" small disabled={isPending}>
          {isPending ? 'Saving...' : 'Save password'}
        </Button>
      </ButtonRow>
    </Form>
  );
}
