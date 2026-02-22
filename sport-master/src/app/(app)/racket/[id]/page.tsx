import { RacketContainer } from '@/src/components/RacketCard/RacketCard-container';
import { FC, Suspense } from 'react';
import { Metadata } from 'next';
import { getMetaRacketById } from '@/src/services/get-meta-racket-by-id';

export async function generateMetadata({
  params,
}: PageProps<'/racket/[id]'>): Promise<Metadata> {
  const { id } = await params;
  const { isError, data } = await getMetaRacketById(id);
  if (isError || !data) {
    return {
      title: 'sport master',
      description: 'Store of sport goods',
    };
  }

  return {
    title: data.name,
    description: data.description,
  };
}
const Page: FC<PageProps<'/racket/[id]'>> = async ({ params }) => {
  const { id } = await params;
  await getMetaRacketById(id);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RacketContainer id={id} />
    </Suspense>
  );
};

export default Page;
