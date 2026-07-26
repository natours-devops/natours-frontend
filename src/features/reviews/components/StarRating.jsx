import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-bottom: 2.5rem;
`;

const Star = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  svg {
    height: 2.8rem;
    width: 2.8rem;
    fill: ${({ $active, theme }) => ($active ? theme.colors.primary : '#ddd')};
    transition: fill 0.15s;
  }

  &:focus {
    outline: none;
  }
`;

export default function StarRating({ value = 0, onChange }) {
  const [hovered, setHovered] = useState(0);
  const display = hovered || value;

  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          type="button"
          $active={star <= display}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          aria-label={`${star} star`}
        >
          <svg><use href="/img/icons.svg#icon-star" /></svg>
        </Star>
      ))}
    </Wrapper>
  );
}
