import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const idAsNumber = parseInt(id || '1'); // Default to 1 if id is not provided or invalid

  const nextId = idAsNumber + 1;

  const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let imageUrl;
  if (idAsNumber === 1) {
    imageUrl = `${gatewayUrl}/ipfs/QmTqP6Ajtshe4xHe42NzSMSfjtUNhyxAdGoa2jLWcGpe8Z1.jpg`;
  } else {
    imageUrl = `${gatewayUrl}/ipfs/QmPRmhLgJUETG2SDDrNDSiaiztDPF2EWYsbkGFmEzytxq7${id}.jpg`;
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="${idAsNumber === 1 ? 'vNext' : 'idk'}" />
    <meta property="fc:frame:image" content="${imageUrl}" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="fc:frame:button:1" content="${idAsNumber === 1 ? 'ok so' : 'alrighttt ok'}" />
    <meta property="fc:frame:post_url" content="${baseUrl}/api/frame?id=${nextId}" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

