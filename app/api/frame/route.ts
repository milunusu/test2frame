import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1

  if(idAsNumber === 2){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 2</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmW9hoQXMaqs9U29dWiZWujPmq1NkPkinqr6xruTjg8tMw.jpg" />
    <meta property="fc:frame:button:1" content="ok so" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="idk" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPRmhLgJUETG2SDDrNDSiaiztDPF2EWYsbkGFmEzytxq7/${id}.jpg" />
    <meta property="fc:frame:button:1" content="alrighttt ok" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';