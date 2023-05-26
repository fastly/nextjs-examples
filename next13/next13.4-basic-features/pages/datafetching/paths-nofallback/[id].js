// import { env } from 'fastly:env';
import { useRouter } from 'next/router';

export default function PostNoFallback(props) {
  const router = useRouter();
  return (
    <div>
      <div>Dynamic Routing with no fallback: /datafetching/paths-nofallback/[id]</div>
      <div>Query: {JSON.stringify(router.query)}</div>
      <div>Props: {JSON.stringify(props)}</div>
    </div>
  );
}

// The functions below get called at build time
export async function getStaticProps({params}) {
  const now = new Date().toISOString();
  return {
    props: {
      id: params.id,
      now,
      // version: env('FASTLY_SERVICE_VERSION'),
    },
  };
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: 'foo' } },
    { params: { id: 'bar' } },
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
}
