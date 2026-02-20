import { RacketContainer } from '@/src/components/RacketCard/RacketCard-container';
import { FC, Suspense } from 'react';

const Page: FC<PageProps<'/racket/[id]'>> = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RacketContainer id={id} />;
    </Suspense>
  );
};

export default Page;
