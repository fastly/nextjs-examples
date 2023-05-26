// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { name } = req.query;

  res.statusCode = 200;
  res.end(JSON.stringify({message: `Hello, ${name}!`}));
}
