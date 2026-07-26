import styled from 'styled-components';
import ReviewCard from '../../reviews/components/ReviewCard';

const Section = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: calc(5rem + var(--section-rotate)) 0;
  position: relative;
  z-index: 1000;
  background: ${({ theme }) => theme.gradients.primary};
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
`;

const ReviewsTrack = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-column-gap: 6rem;
  grid-auto-flow: column;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  &::before,
  &::after {
    content: '';
    width: 2rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function TourReviews({ reviews }) {
  return (
    <Section>
      <ReviewsTrack>
        {reviews?.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </ReviewsTrack>
    </Section>
  );
}
