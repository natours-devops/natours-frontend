import styled from 'styled-components';
import Avatar from '../../../components/Avatar/Avatar';

const Card = styled.div`
  width: 30rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-self: flex-start;
`;

const UserName = styled.h6`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  text-transform: uppercase;
`;

const ReviewText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  text-align: center;
`;

const Stars = styled.div`
  margin-top: auto;
  display: flex;
`;

const Star = styled.svg`
  height: 2rem;
  width: 2rem;
  margin-right: 1px;
  fill: ${({ $active, theme }) => ($active ? theme.colors.primary : '#bbb')};
`;

export default function ReviewCard({ review }) {
  return (
    <Card>
      <AvatarRow>
        <Avatar
          src={`/img/users/${review.user.photo}`}
          alt={review.user.name}
          size="4.5rem"
        />
        <UserName>{review.user.name}</UserName>
      </AvatarRow>
      <ReviewText>{review.review}</ReviewText>
      <Stars>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} $active={review.rating >= star}>
            <use href="/img/icons.svg#icon-star" />
          </Star>
        ))}
      </Stars>
    </Card>
  );
}
