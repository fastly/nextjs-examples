export default async function handler(req, res) {
  // In a real app you would check for a secret to confirm this is a valid request
  // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  const { slug } = req.query;

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(`/datafetching/paths-blocking/${slug ?? 'foo'}`);
    try {
      await res.revalidate(`/datafetching/paths-nofallback/${slug ?? 'foo'}`);
    } catch {
      // it's ok to 404 on this
    }
    await res.revalidate(`/datafetching/paths-fallback/${slug ?? 'foo'}`);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
