import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import StarRating from './StarRating';
import Textarea from '../../../components/Textarea/Textarea';
import Button from '../../../components/Button/Button';
import { useCreateReview } from '../hooks/useReviews';

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 4rem;
  border-radius: ${({ theme }) => theme.borderRadius.loginForm};
  box-shadow: ${({ theme }) => theme.shadows.form};
  max-width: 55rem;
  margin: 0 auto;
`;

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  text-transform: uppercase;
  background-image: ${({ theme }) => theme.gradients.primaryRight};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  margin-bottom: 2.5rem;
`;

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.errorRed};
  font-size: 1.3rem;
  margin-top: -1.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  margin-bottom: 1rem;
`;

export default function ReviewForm({ tourId, slug }) {
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { mutate: submitReview, isPending } = useCreateReview(slug);

  const onSubmit = (data) => {
    if (!rating) return;
    submitReview(
      { tourId, data: { review: data.review, rating } },
      { onSuccess: () => { reset(); setRating(0); } }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading>Write a review</Heading>

      <Label>Your rating</Label>
      <StarRating value={rating} onChange={setRating} />
      {!rating && <ErrorMsg style={{ marginTop: '-1rem' }}>Please select a rating</ErrorMsg>}

      <Textarea
        label="Your review"
        id="review"
        placeholder="Share your experience..."
        {...register('review', { required: 'Review text is required' })}
      />
      {errors.review && <ErrorMsg>{errors.review.message}</ErrorMsg>}

      <Button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit review'}
      </Button>
    </Form>
  );
}
