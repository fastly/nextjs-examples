import { useRouter } from 'next/router'

export default function PostWithFallback(props) {
  const router = useRouter();
  return (
    <div>
      <div>Simple Dynamic Routing : /datafetching/paths-fallback/[id]</div>
      {router.isFallback ? (
        <div>Placeholder Version</div>
      ) : (
        <>
          <div>Query: {JSON.stringify(router.query)}</div>
          <div>Props: {JSON.stringify(props)}</div>
        </>
      )}
    </div>
  );
}

// The functions below get called at build time
export async function getStaticProps({params}) {
  return {
    props: {
      id: params.id,
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
    fallback: true,
  };
}
