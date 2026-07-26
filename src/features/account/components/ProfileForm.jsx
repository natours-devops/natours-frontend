import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useUpdateMe } from '../hooks/useUpdateMe';
import { useAuth } from '../../../context/AuthContext';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const PhotoUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
`;

const UserPhoto = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const FileLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 3px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.button};
    transform: translateY(-2px);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ProfileForm() {
  const { user } = useAuth();
  const { mutate: updateMe, isPending } = useUpdateMe();
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) reset({ name: user.name, email: user.email });
  }, [user, reset]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    if (fileRef.current?.files[0]) {
      formData.append('photo', fileRef.current.files[0]);
    }
    updateMe(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <PhotoUpload>
        <UserPhoto
          src={preview || `/img/users/${user?.photo}`}
          alt="User photo"
        />
        <FileInput
          type="file"
          accept="image/*"
          id="photo"
          ref={fileRef}
          onChange={handleFileChange}
        />
        <FileLabel htmlFor="photo">Choose new photo</FileLabel>
      </PhotoUpload>

      <Input
        label="Name"
        id="name"
        type="text"
        {...register('name', { required: true })}
      />
      <Input
        label="Email address"
        id="email"
        type="email"
        {...register('email', { required: true })}
      />

      <ButtonRow>
        <Button type="submit" small disabled={isPending}>
          {isPending ? 'Saving...' : 'Save settings'}
        </Button>
      </ButtonRow>
    </Form>
  );
}
