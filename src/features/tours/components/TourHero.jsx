import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  height: 38vw;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--section-rotate)), 0 100%);
`;

const HeroImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: 50% 25%;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ theme }) => theme.gradients.overlay};
`;

const HeadingBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightLight};
  font-size: 5rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;

  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    box-decoration-break: clone;
    background-image: ${({ theme }) => theme.gradients.overlay};
  }
`;

const DetailsGroup = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const Detail = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);

  svg {
    height: 2rem;
    width: 2rem;
    fill: currentColor;
    filter: drop-shadow(0 0.75rem 0.5rem rgba(0, 0, 0, 0.25));
  }
`;

export default function TourHero({ tour }) {
  return (
    <Section>
      <HeroImg src={`/img/tours/${tour.imageCover}`} alt={tour.name} />
      <Overlay />
      <HeadingBox>
        <Title><span>{tour.name} tour</span></Title>
        <DetailsGroup>
          <Detail>
            <svg><use href="/img/icons.svg#icon-clock" /></svg>
            <span>{tour.duration} days</span>
          </Detail>
          <Detail>
            <svg><use href="/img/icons.svg#icon-map-pin" /></svg>
            <span>{tour.startLocation?.description}</span>
          </Detail>
        </DetailsGroup>
      </HeadingBox>
    </Section>
  );
}
