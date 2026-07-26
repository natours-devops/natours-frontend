import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
`;

const SkeletonBox = styled.div`
  border-radius: ${({ $radius, theme }) => $radius || theme.borderRadius.form};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '1.6rem'};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s infinite;
`;

const CardSkeleton = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;

const CardBody = styled.div`
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export function CardSkeletonItem() {
  return (
    <CardSkeleton>
      <SkeletonBox $height="22rem" $radius="0" />
      <CardBody>
        <SkeletonBox $height="1.4rem" $width="60%" />
        <SkeletonBox $height="1.4rem" />
        <SkeletonBox $height="1.4rem" $width="80%" />
        <SkeletonBox $height="1.4rem" $width="50%" />
      </CardBody>
    </CardSkeleton>
  );
}

export default function Skeleton({ width, height, radius }) {
  return <SkeletonBox $width={width} $height={height} $radius={radius} />;
}
