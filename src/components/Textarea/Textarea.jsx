import styled from 'styled-components';
import { forwardRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  color: ${({ theme }) => theme.colors.bodyText};
`;

const StyledTextarea = styled.textarea`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGreyAlt};
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.form};
  transition: all 0.3s;
  resize: vertical;
  min-height: 12rem;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Textarea = forwardRef(function Textarea({ label, id, ...props }, ref) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextarea id={id} ref={ref} {...props} />
    </Wrapper>
  );
});

export default Textarea;
