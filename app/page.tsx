import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "frame 1"
    }
  ],
  image: `https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/0.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Cosmic Cowboys',
  description: 'A frame telling the story of Cosmic Cowboys',
  openGraph: {
    title: 'Cosmic Cowboys',
    description: 'A frame telling the story of Cosmic Cowboys',
    images: [`https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/1.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}