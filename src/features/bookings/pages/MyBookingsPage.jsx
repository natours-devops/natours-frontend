import styled from 'styled-components';
import { useMyBookings } from '../hooks/useBookings';
import BookingCard from '../components/BookingCard';
import { CardSkeletonItem } from '../../../components/Skeleton/Skeleton';
import EmptyState from '../../../components/EmptyState/EmptyState';
import ErrorState from '../../../components/ErrorState/ErrorState';
import Header from '../../../components/Header/Header';
import AccountSidebar from '../../account/components/AccountSidebar';

const Main = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 3rem;
`;

const UserView = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 120rem;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.userView};
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 7rem 5rem;
`;

const PageHeading = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  background-image: ${({ theme }) => theme.gradients.primaryRight};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  display: inline-block;
  margin-bottom: 4rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  @media (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

export default function MyBookingsPage() {
  const { data: bookings, isLoading, isError, error } = useMyBookings();

  return (
    <>
      <Header />
      <Main>
        <UserView>
          <AccountSidebar />
          <Content>
            <PageHeading>My bookings</PageHeading>
            {isError ? (
              <ErrorState message={error.message} />
            ) : (
              <CardGrid>
                {isLoading
                  ? Array.from({ length: 3 }, (_, i) => <CardSkeletonItem key={i} />)
                  : bookings?.length === 0
                  ? <EmptyState message="You have no bookings yet." emoji="🏕️" />
                  : bookings?.map((booking) => (
                      <BookingCard key={booking._id} booking={booking} />
                    ))
                }
              </CardGrid>
            )}
          </Content>
        </UserView>
      </Main>
    </>
  );
}
