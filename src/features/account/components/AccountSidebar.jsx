import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Menu = styled.nav`
  flex: 0 0 32rem;
  background-image: ${({ theme }) => theme.gradients.primary};
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
`;

const SideNav = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  margin: 1rem 0;
  border-left: 0 solid #fff;
  transition: all 0.3s;

  &:hover,
  &.active {
    border-left: 4px solid #fff;
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    transform: translateX(3px);
  }

  &.active {
    transform: translateX(-3px);
  }

  svg {
    height: 1.9rem;
    width: 1.9rem;
    fill: #f7f7f7;
    flex-shrink: 0;
  }
`;

const AdminSection = styled.div`
  margin-top: 5.5rem;
`;

const AdminHeading = styled.h5`
  margin: 0 5rem 1.5rem 4rem;
  padding-bottom: 3px;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #f2f2f2;
  border-bottom: 1px solid currentColor;
`;

const navItems = [
  { to: '/me', label: 'Settings', icon: 'settings', end: true },
  { to: '/my-tours', label: 'My bookings', icon: 'briefcase' },
  { to: '/my-reviews', label: 'My reviews', icon: 'star' },
  { to: '/billing', label: 'Billing', icon: 'credit-card' },
];

const adminItems = [
  { to: '/manage-tours', label: 'Manage tours', icon: 'map' },
  { to: '/manage-users', label: 'Manage users', icon: 'users' },
  { to: '/manage-reviews', label: 'Manage reviews', icon: 'star' },
  { to: '/manage-bookings', label: 'Manage bookings', icon: 'briefcase' },
];

function SideNavItem({ to, label, icon, end }) {
  return (
    <NavItem>
      <StyledNavLink to={to} end={end}>
        <svg><use href={`/img/icons.svg#icon-${icon}`} /></svg>
        {label}
      </StyledNavLink>
    </NavItem>
  );
}

export default function AccountSidebar() {
  const { user } = useAuth();

  return (
    <Menu>
      <SideNav>
        {navItems.map((item) => (
          <SideNavItem key={item.to} {...item} />
        ))}
      </SideNav>

      {user?.role === 'admin' && (
        <AdminSection>
          <AdminHeading>Admin</AdminHeading>
          <SideNav>
            {adminItems.map((item) => (
              <SideNavItem key={item.to} {...item} />
            ))}
          </SideNav>
        </AdminSection>
      )}
    </Menu>
  );
}
