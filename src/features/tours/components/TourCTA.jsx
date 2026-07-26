import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Button from '../../../components/Button/Button';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../lib/axios';

const Section = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: 3rem;
  padding-bottom: 11rem;
  padding-top: calc(15rem + var(--section-rotate));
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const CtaBox = styled.div`
  position: relative;
  max-width: 105rem;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 9rem 5rem 9rem 21rem;
  border-radius: ${({ theme }) => theme.borderRadius.cta};
  box-shadow: ${({ theme }) => theme.shadows.cta};
`;

const CtaImg = styled.img`
  height: 15rem;
  width: 15rem;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 50%;
  box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
  transform: ${({ $pos }) =>
    $pos === 'logo'
      ? 'translate(-35%, -50%)'
      : $pos === '1'
      ? 'translate(-10%, -50%) scale(0.97)'
      : 'translate(15%, -50%) scale(0.94)'};
  z-index: ${({ $pos }) => ($pos === 'logo' ? 10 : $pos === '1' ? 9 : 8)};
  background: ${({ $pos, theme }) => $pos === 'logo' ? theme.gradients.primary : 'none'};
  display: ${({ $pos }) => $pos === 'logo' ? 'flex' : 'block'};
  align-items: center;
  justify-content: center;
  padding: ${({ $pos }) => $pos === 'logo' ? '2rem' : '0'};
`;

const CtaContent = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  gap: 0.7rem;
  align-items: center;
`;

const CtaHeading = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  background-image: ${({ theme }) => theme.gradients.primaryRight};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const CtaText = styled.p`
  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
`;

export default function TourCTA({ tour }) {
  const { user } = useAuth();

  const { mutate: bookTour, isPending } = useMutation({
    mutationFn: () => api.get(`/bookings/checkout-session/${tour._id}`),
    onSuccess: (res) => {
      window.location.href = res.data.session.url;
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <Section>
      <CtaBox>
        <CtaImg $pos="logo" as="div">
          <img src="/img/logo-white.png" alt="Natours logo" style={{ width: '100%' }} />
        </CtaImg>
        <CtaImg $pos="1" src={`/img/tours/${tour.images?.[1]}`} alt="Tour picture" />
        <CtaImg $pos="2" src={`/img/tours/${tour.images?.[2]}`} alt="Tour picture" />

        <CtaContent>
          <CtaHeading>What are you waiting for?</CtaHeading>
          <CtaText>
            {tour.duration} days. 1 adventure. Infinite memories. Make it yours today!
          </CtaText>
          {user ? (
            <Button
              style={{ gridRow: '1 / 3', justifySelf: 'end' }}
              onClick={() => bookTour()}
              disabled={isPending}
            >
              {isPending ? 'Processing...' : 'Book tour now!'}
            </Button>
          ) : (
            <Button
              as={Link}
              to="/login"
              style={{ gridRow: '1 / 3', justifySelf: 'end' }}
            >
              Log in to book tour
            </Button>
          )}
        </CtaContent>
      </CtaBox>
    </Section>
  );
}
