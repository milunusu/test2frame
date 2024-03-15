import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "ok so"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTqP6Ajtshe4xHe42NzSMSfjtUNhyxAdGoa2jLWcGpe8Z%0.jpg/`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'mili struggles',
  description: 'just learning dont mind me',
  openGraph: {
    title: 'trying my best',
    description: 'A frame of a rabbit representing me',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTqP6Ajtshe4xHe42NzSMSfjtUNhyxAdGoa2jLWcGpe8Z%0.jpg/`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>what am i doing</h1>
    </>
  );
}