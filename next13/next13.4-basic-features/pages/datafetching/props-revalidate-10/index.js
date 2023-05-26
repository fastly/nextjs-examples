export default function Props({ time }) {
  return (
    <div>This was rendered at {time}, and will be re-rendered every 10 seconds.</div>
  );
}

export async function getStaticProps() {
  const time = new Date().toISOString();
  return {
    props: {
      time,
    },
    revalidate: 10,
  };
}
