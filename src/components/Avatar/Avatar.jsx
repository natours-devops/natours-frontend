import styled from 'styled-components';

const Img = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  object-fit: cover;
  width: ${({ $size }) => $size || '3.5rem'};
  height: ${({ $size }) => $size || '3.5rem'};
  display: block;
`;

export default function Avatar({ src, alt, size }) {
  return (
    <Img
      src={src || '/img/users/default.jpg'}
      alt={alt || 'User photo'}
      $size={size}
    />
  );
}
