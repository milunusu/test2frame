
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);

  const nextId = idAsNumber + 1;

  if (idAsNumber === 1) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame 2</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTqP6Ajtshe4xHe42NzSMSfjtUNhyxAdGoa2jLWcGpe8Z%1.jpg" />
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="fc:frame:button1" content="ok so why mediocre" />
      <meta property="fc:frame:button1:action" content="link" />
      <meta property="fc:frame:button1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${id}</title>
      <meta property="fc:frame" content="idk" />
      <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPRmhLgJUETG2SDDrNDSiaiztDPF2EWYsbkGFmEzytxq7%${id}.jpg" />
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="fc:frame:button1" content="geez alright" />
      <meta property="fc:frame:button1:action" content="link" />
      <meta property="fc:frame:button1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

