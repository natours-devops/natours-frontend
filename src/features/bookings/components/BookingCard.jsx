import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  transition: 0.3s all;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.15);
  }
`;

const ImageBox = styled.div`
  position: relative;
  height: 18rem;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ theme }) => theme.gradients.cardOverlay};
  opacity: 0.7;
  z-index: 1;
`;

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TourName = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightLight};
  font-size: 2rem;
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  z-index: 2;
  text-align: right;

  span {
    padding: 0.6rem 1rem;
    background-image: ${({ theme }) => theme.gradients.overlay};
    box-decoration-break: clone;
    line-height: 1;
  }
`;

const Body = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.bodyText};

  svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const Footer = styled.div`
  padding: 1.5rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
`;

const Price = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  color: ${({ theme }) => theme.colors.bodyText};
`;

const DetailLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 2px;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function BookingCard({ booking }) {
  const { tour, price, createdAt } = booking;

  if (!tour) return null;

  const bookedOn = new Date(createdAt).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <StyledCard>
      <ImageBox>
        <Overlay />
        <CoverImg src={`/img/tours/${tour.imageCover}`} alt={tour.name} />
        <TourName><span>{tour.name}</span></TourName>
      </ImageBox>

      <Body>
        <InfoRow>
          <svg><use href="/img/icons.svg#icon-calendar" /></svg>
          <span>Booked on {bookedOn}</span>
        </InfoRow>
        <InfoRow>
          <svg><use href="/img/icons.svg#icon-clock" /></svg>
          <span>{tour.duration} days</span>
        </InfoRow>
        <InfoRow>
          <svg><use href="/img/icons.svg#icon-map-pin" /></svg>
          <span>{tour.startLocation?.description}</span>
        </InfoRow>
      </Body>

      <Footer>
        <Price>${price} <span style={{ fontWeight: 300, color: '#999' }}>per person</span></Price>
        <DetailLink to={`/tour/${tour.slug}`}>View tour</DetailLink>
      </Footer>
    </StyledCard>
  );
}
