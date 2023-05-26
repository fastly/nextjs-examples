// import { env } from 'fastly:env';
import { useRouter } from 'next/router';

export default function Post(props) {
  const router = useRouter();
  return (
    <div>
      <div>Dynamic Routing with blocking fallback: /datafetching/paths-blocking/[id]</div>
      <div>Query: {JSON.stringify(router.query)}</div>
      <div>Props: {JSON.stringify(props)}</div>
    </div>
  );
}

// The functions below get called at build time
export async function getStaticProps({params}) {
  const now = new Date().toISOString();

  const res = await fetch('https://http-me.glitch.me/anything', { backend: 'http-me' });
  const body = await res.text();

  return {
    props: {
      id: params.id,
      now,
      body,
      //version: env('FASTLY_SERVICE_VERSION'),
    },
  };
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: 'foo' } },
    { params: { id: 'bar' } },
  ];

  return {
    paths,
    fallback: 'blocking',
  };
}
