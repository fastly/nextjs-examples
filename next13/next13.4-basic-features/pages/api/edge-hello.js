// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

export const config = {
  runtime: 'edge',
};

export default async function handler (req) {
  return new Response(
      'Hello, from the edge!',
      {
        status: 200,
        headers: {
          'Content-Type': 'text/json'
        }
      }
  )
}
