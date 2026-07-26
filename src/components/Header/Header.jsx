import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Avatar from '../Avatar/Avatar';
import api from '../../lib/axios';
import toast from 'react-hot-toast';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.darkHeader};
  padding: 0 5rem;
  height: 8rem;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 62.5em) {
    flex-direction: column;
    height: auto;
    padding: 2rem 3rem;
    gap: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex: 0 1 40%;

  @media (max-width: 37.5em) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const NavUser = styled(Nav)`
  justify-content: flex-end;
`;

const Logo = styled.div`
  img {
    height: 3.5rem;
  }

  @media (min-width: 62.5em) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
  }
`;

const NavEl = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGrey};
  text-transform: uppercase;
  font-size: 1.6rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    transform: translateY(-2px);
    text-shadow: 0 0.7rem 1rem black;
  }
`;

const NavBtn = styled.button`
  color: ${({ theme }) => theme.colors.lightGrey};
  text-transform: uppercase;
  font-size: 1.6rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    transform: translateY(-2px);
    text-shadow: 0 0.7rem 1rem black;
  }
`;

const NavElCta = styled(NavEl)`
  padding: 1rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  border: 1px solid currentColor !important;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.bodyText};
    text-shadow: none;
    border-color: ${({ theme }) => theme.colors.lightGrey};
    transform: none;
  }
`;

export default function Header() {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.get('/users/logout');
      logout();
      navigate('/');
    } catch {
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <StyledHeader>
      <Nav>
        <NavEl to="/">All tours</NavEl>
      </Nav>

      <Logo>
        <Link to="/">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </Link>
      </Logo>

      <NavUser>
        {!isLoading && (
          user ? (
            <>
              <NavBtn onClick={handleLogout}>Log out</NavBtn>
              <NavEl to="/me">
                <Avatar src={`/img/users/${user.photo}`} alt={user.name} />
                <span>{user.name.split(' ')[0]}</span>
              </NavEl>
            </>
          ) : (
            <>
              <NavEl to="/login">Log in</NavEl>
              <NavElCta to="/signup">Sign up</NavElCta>
            </>
          )
        )}
      </NavUser>
    </StyledHeader>
  );
}
