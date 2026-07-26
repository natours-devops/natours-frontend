import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  margin-top: calc(0px - var(--section-rotate));
  position: relative;
  z-index: 1000;
`;

const PictureBox = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 110%;
  object-fit: cover;
  padding-top: ${({ $index }) => $index === 0 ? '15%' : '0'};
  padding-bottom: ${({ $index }) => $index === 1 ? '15%' : $index === 2 ? '27%' : '0'};
`;

export default function TourPictures({ images, tourName }) {
  return (
    <Section>
      {images?.map((img, i) => (
        <PictureBox key={img}>
          <Img
            src={`/img/tours/${img}`}
            alt={`${tourName} ${i + 1}`}
            $index={i}
          />
        </PictureBox>
      ))}
    </Section>
  );
}
