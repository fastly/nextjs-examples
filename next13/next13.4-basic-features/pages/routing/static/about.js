import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About this site</h1>
      <div>This is a Next.js site.</div>
      <div>Static Routing : /routing/static/about</div>
      <div>Query: {JSON.stringify(router.query)}</div>
    </div>
  );
}
