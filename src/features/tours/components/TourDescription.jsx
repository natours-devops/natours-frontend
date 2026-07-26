import styled from 'styled-components';

const Section = styled.section`
  background-color: #fcfcfc;
  margin-top: calc(0px - var(--section-rotate));
  display: flex;

  & > * {
    padding: 0 8vw;
    padding-top: 14vw;
    padding-bottom: calc(1vw + var(--section-rotate));
    flex: 0 0 50%;
  }
`;

const OverviewBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
`;

const OverviewGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 7rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  background-image: ${({ theme }) => theme.gradients.primaryRight};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
  margin-bottom: 3.5rem;
`;

const OverviewDetail = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  gap: 1.25rem;

  &:not(:last-child) {
    margin-bottom: 2.25rem;
  }

  svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const Label = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-right: 1rem;
`;

const Value = styled.span`
  text-transform: capitalize;
`;

const GuideImg = styled.img`
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  object-fit: cover;
`;

const DescriptionBox = styled.div``;

const DescText = styled.p`
  font-size: 1.7rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

function OverviewItem({ icon, label, text }) {
  return (
    <OverviewDetail>
      <svg><use href={`/img/icons.svg#icon-${icon}`} /></svg>
      <Label>{label}</Label>
      <Value>{text}</Value>
    </OverviewDetail>
  );
}

export default function TourDescription({ tour }) {
  const startDate = tour.startDates?.[0]
    ? new Date(tour.startDates[0]).toLocaleString('en-us', { month: 'long', year: 'numeric' })
    : 'N/A';

  const paragraphs = tour.description?.split('\n') || [];

  return (
    <Section>
      <OverviewBox>
        <div>
          <OverviewGroup>
            <SectionHeading>Quick facts</SectionHeading>
            <OverviewItem icon="calendar" label="Next date" text={startDate} />
            <OverviewItem icon="trending-up" label="Difficulty" text={tour.difficulty} />
            <OverviewItem icon="user" label="Participants" text={`${tour.maxGroupSize} people`} />
            <OverviewItem icon="star" label="Rating" text={`${tour.ratingsAverage} / 5`} />
          </OverviewGroup>

          <OverviewGroup>
            <SectionHeading>Your tour guides</SectionHeading>
            {tour.guides?.map((guide) => (
              <OverviewDetail key={guide._id}>
                <GuideImg src={`/img/users/${guide.photo}`} alt={guide.name} />
                <Label>{guide.role === 'lead-guide' ? 'Lead guide' : 'Tour guide'}</Label>
                <Value>{guide.name}</Value>
              </OverviewDetail>
            ))}
          </OverviewGroup>
        </div>
      </OverviewBox>

      <DescriptionBox>
        <SectionHeading>About {tour.name} tour</SectionHeading>
        {paragraphs.map((p, i) => (
          <DescText key={i}>{p}</DescText>
        ))}
      </DescriptionBox>
    </Section>
  );
}
