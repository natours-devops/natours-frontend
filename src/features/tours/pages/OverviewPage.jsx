import styled from 'styled-components';
import { useTours } from '../hooks/useTours';
import Card from '../../../components/Card/Card';
import { CardSkeletonItem } from '../../../components/Skeleton/Skeleton';
import EmptyState from '../../../components/EmptyState/EmptyState';
import ErrorState from '../../../components/ErrorState/ErrorState';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 8rem 6rem;
  flex: 1;
`;

const CardGrid = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7rem;

  @media (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

export default function OverviewPage() {
  const { data: tours, isLoading, isError, error } = useTours();

  return (
    <>
      <Header />
      <Main>
        {isError ? (
          <ErrorState message={error.message} />
        ) : (
          <CardGrid>
            {isLoading
              ? Array.from({ length: 6 }, (_, i) => <CardSkeletonItem key={i} />)
              : tours?.length === 0
              ? <EmptyState message="No tours available at the moment." emoji="🏕️" />
              : tours?.map((tour) => <Card key={tour._id} tour={tour} />)
            }
          </CardGrid>
        )}
      </Main>
      <Footer />
    </>
  );
}
