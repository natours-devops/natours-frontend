import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

const Main = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
`;

const ErrorBox = styled.div`
  text-align: center;
  max-width: 80rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
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
  color: ${({ theme }) => theme.colors.bodyText};
  margin-bottom: 3rem;
`;

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <Main>
        <ErrorBox>
          <Title>
            <Heading>Page not found!</Heading>
            <Emoji>😢</Emoji>
          </Title>
          <Message>The page you are looking for does not exist.</Message>
          <Button as={Link} to="/">Back to all tours</Button>
        </ErrorBox>
      </Main>
      <Footer />
    </>
  );
}
