import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Swr() {
  const { data, error } = useSWR('https://http-me.glitch.me/json', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
