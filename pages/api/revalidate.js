export default async function handler(req, res) {
  const {
    body: { paths = [] },
    method,
  } = req;

  if (
    req.headers.authorization !== `Bearer ${process.env.REVALIDATE_SECRET_KEY}`
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (method !== 'PUT') {
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }

  if (!paths || !paths.length) {
    return res.status(412).json({ message: 'No paths' });
  }

  try {
    const revalidatePaths = paths
      .filter((path) => path.startsWith('/'))
      .map((path) => res.revalidate(path));

    await Promise.all(revalidatePaths);

    return res.json({ revalidated: true, message: 'Paths revalidated' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
