import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  background-color: ${({ theme }) => theme.colors.white};
  transition: 0.3s all;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

const CardHeader = styled.div`
  position: relative;
`;

const CardPicture = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  height: 22rem;
`;

const CardPictureOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ theme }) => theme.gradients.cardOverlay};
  opacity: 0.7;
  z-index: 1;
`;

const CardPictureImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightLight};
  font-size: 2.75rem;
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 70%;
  z-index: 10;
  line-height: 1.3;

  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    box-decoration-break: clone;
    background-image: ${({ theme }) => theme.gradients.overlay};
  }
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;
`;

const CardSubHeading = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  grid-column: 1 / -1;
`;

const CardText = styled.p`
  grid-column: 1 / -1;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
`;

const CardData = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.7rem;
    height: 2rem;
    width: 2rem;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const CardFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 2.5rem 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;
  align-items: center;
`;

const FooterValue = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weightBold};
`;

const FooterText = styled.span`
  color: ${({ theme }) => theme.colors.mutedText};
`;

const FooterRatings = styled.p`
  grid-row: 2 / 3;
`;

export default function Card({ tour }) {
  const startDate = tour.startDates?.[0]
    ? new Date(tour.startDates[0]).toLocaleString('en-us', { month: 'long', year: 'numeric' })
    : 'N/A';

  return (
    <StyledCard>
      <CardHeader>
        <CardPicture>
          <CardPictureOverlay />
          <CardPictureImg
            src={`/img/tours/${tour.imageCover}`}
            alt={tour.name}
          />
        </CardPicture>
        <CardTitle>
          <span>{tour.name}</span>
        </CardTitle>
      </CardHeader>

      <CardDetails>
        <CardSubHeading>{tour.difficulty} {tour.duration}-day tour</CardSubHeading>
        <CardText>{tour.summary}</CardText>
        <CardData>
          <svg><use href="/img/icons.svg#icon-map-pin" /></svg>
          <span>{tour.startLocation?.description}</span>
        </CardData>
        <CardData>
          <svg><use href="/img/icons.svg#icon-calendar" /></svg>
          <span>{startDate}</span>
        </CardData>
        <CardData>
          <svg><use href="/img/icons.svg#icon-flag" /></svg>
          <span>{tour.locations?.length} stops</span>
        </CardData>
        <CardData>
          <svg><use href="/img/icons.svg#icon-user" /></svg>
          <span>{tour.maxGroupSize} people</span>
        </CardData>
      </CardDetails>

      <CardFooter>
        <p>
          <FooterValue>${tour.price}</FooterValue>{' '}
          <FooterText>per person</FooterText>
        </p>
        <FooterRatings>
          <FooterValue>{tour.ratingsAverage}</FooterValue>{' '}
          <FooterText>rating ({tour.ratingsQuantity})</FooterText>
        </FooterRatings>
        <Button as={Link} to={`/tour/${tour.slug}`} small style={{ gridRow: '1 / 3', justifySelf: 'end', alignSelf: 'center' }}>
          Details
        </Button>
      </CardFooter>
    </StyledCard>
  );
}
