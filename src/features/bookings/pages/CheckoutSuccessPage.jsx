import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useConfirmBooking } from '../hooks/useBookings';
import { useAuth } from '../../../context/AuthContext';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorState from '../../../components/ErrorState/ErrorState';

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 8rem 2rem;
`;

const Message = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.bodyText};
  margin-top: 2rem;
`;

export default function CheckoutSuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, isLoading: authLoading } = useAuth();
  const { mutate: confirm, isError, error } = useConfirmBooking();
  const called = useRef(false);

  useEffect(() => {
    // Wait until auth has finished loading
    if (authLoading) return;

    // If not logged in, redirect to login
    if (!user) {
      navigate('/login', { replace: true });
      return;
    }

    // Prevent double call in StrictMode
    if (called.current) return;
    called.current = true;

    const tour = searchParams.get('tour');
    const price = searchParams.get('price');

    // Missing params — go home
    if (!tour || !price) {
      navigate('/', { replace: true });
      return;
    }

    confirm(
      { tour, price: Number(price) },
      { onSuccess: () => navigate('/my-tours', { replace: true }) }
    );
  }, [authLoading, user]);

  if (isError) return <ErrorState message={error.message} />;

  return (
    <Wrapper>
      <Spinner />
      <Message>Confirming your booking...</Message>
    </Wrapper>
  );
}
