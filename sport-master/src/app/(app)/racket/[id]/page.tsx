import Card from '@/src/components/Card';
import { FC } from 'react';

export const generateStaticParams = async () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
};

const Page: FC<PageProps<'/racket/[id]'>> = async ({ params }) => {
  const { id } = await params;
  return <Card id={id} />;
};

export default Page;
