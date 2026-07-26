import styled from 'styled-components';
import Header from '../../../components/Header/Header';
import AccountSidebar from '../components/AccountSidebar';
import ProfileForm from '../components/ProfileForm';
import PasswordForm from '../components/PasswordForm';

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
  padding: 7rem 0;
`;

const FormContainer = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;
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
  margin-bottom: 3rem;
`;

const Divider = styled.div`
  margin: 6rem 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export default function AccountPage() {
  return (
    <>
      <Header />
      <Main>
        <UserView>
          <AccountSidebar />
          <Content>
            <FormContainer>
              <SectionHeading>Your account settings</SectionHeading>
              <ProfileForm />
            </FormContainer>

            <Divider />

            <FormContainer>
              <SectionHeading>Password change</SectionHeading>
              <PasswordForm />
            </FormContainer>
          </Content>
        </UserView>
      </Main>
    </>
  );
}
