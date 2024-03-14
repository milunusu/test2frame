import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "ok so"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNe1AtsZ3nPDXyj8i989d5cpU2cUHwp4F9dCD5v1jE5wg.jpg/`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'mili struggles',
  description: 'just learning dont mind me',
  openGraph: {
    title: 'trying my best',
    description: 'A frame of a rabbit representing me',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNe1AtsZ3nPDXyj8i989d5cpU2cUHwp4F9dCD5v1jE5wg.jpg/`],
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