import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1

  if(idAsNumber === 1){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 2</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/1.jpg" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="fc:frame:button:1" content="Visit CosmicCowboys.cloud" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="Learn How this was made" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    
  </head></html>`);
  } else {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/0.jpg" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';