export default async function handler(req, res) {
  // In a real app you would check for a secret to confirm this is a valid request
  // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  const { mode } = req.query;
  const enable = mode === 'on';

  res.setDraftMode({ enable });

  return res.json({ enable });
}
