import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 6rem 4rem 3rem 4rem;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 0.75rem;
  justify-content: space-between;

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.25rem;
    justify-items: center;
  }
`;

const FooterLogo = styled.div`
  grid-row: 1 / 3;
  align-self: center;

  img {
    height: 3rem;
  }

  @media (max-width: 50em) {
    grid-row: 1;
  }
`;

const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.bodyText};
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  justify-self: end;
  color: ${({ theme }) => theme.colors.mutedText};

  @media (max-width: 50em) {
    justify-self: center;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLogo>
        <Link to="/">
          <img src="/img/logo-green.png" alt="Natours logo" />
        </Link>
      </FooterLogo>

      <FooterNav>
        <li><FooterLink to="#">About us</FooterLink></li>
        <li><FooterLink to="#">Download apps</FooterLink></li>
        <li><FooterLink to="#">Become a guide</FooterLink></li>
        <li><FooterLink to="#">Careers</FooterLink></li>
        <li><FooterLink to="#">Contact</FooterLink></li>
      </FooterNav>

      <Copyright>
        &copy; by Natours. All rights reserved.
      </Copyright>
    </StyledFooter>
  );
}
