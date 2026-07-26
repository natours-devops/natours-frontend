import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  text-align: center;
`;

const Emoji = styled.span`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.mutedText};
`;

export default function EmptyState({ message = 'No results found.', emoji = '🌿' }) {
  return (
    <Wrapper>
      <Emoji>{emoji}</Emoji>
      <Message>{message}</Message>
    </Wrapper>
  );
}
