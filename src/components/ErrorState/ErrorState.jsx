import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const Heading = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  background-image: ${({ theme }) => theme.gradients.error};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const Emoji = styled.span`
  font-size: 3.75rem;
`;

const Message = styled.p`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  max-width: 50rem;
  color: ${({ theme }) => theme.colors.bodyText};
`;

export default function ErrorState({ message = 'Something went wrong!' }) {
  return (
    <Wrapper>
      <Title>
        <Heading>Uh oh! Something went wrong!</Heading>
        <Emoji>😢</Emoji>
      </Title>
      <Message>{message}</Message>
    </Wrapper>
  );
}
