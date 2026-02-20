
import { RacketContainer } from '@/src/components/RacketCard/RacketCard-container';
import { FC } from 'react';

const Page: FC<PageProps<'/racket/[id]'>> = async ({ params }) => {
  const { id } = await params;
  return <RacketContainer id={id} />;
};

export default Page;
