import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 3rem 0;
`;

const PageBtn = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  border: none;
  font-size: 1.4rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.lightGreyAlt};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.bodyText};
  font-weight: ${({ $active, theme }) =>
    $active ? theme.fonts.weightBold : theme.fonts.weightRegular};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <Wrapper>
      <PageBtn onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &laquo;
      </PageBtn>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PageBtn
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageBtn>
      ))}
      <PageBtn onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &raquo;
      </PageBtn>
    </Wrapper>
  );
}
