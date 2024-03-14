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
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmNe1AtsZ3nPDXyj8i989d5cpU2cUHwp4F9dCD5v1jE5wg/USAMI%201.jpeg" />
    <meta property="fc:frame:button:1" content="ok so" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="idk" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmNe1AtsZ3nPDXyj8i989d5cpU2cUHwp4F9dCD5v1jE5wg/USAMI%201.jpeg" />
    <meta property="fc:frame:button:1" content="alrighttt ok" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';