export default async function handler(req, res) {
  // In a real app you would check for a secret to confirm this is a valid request
  // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  try {
    await res.revalidate(`/datafetching/props-revalidate-10`);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
