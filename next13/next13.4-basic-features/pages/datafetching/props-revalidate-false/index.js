export default function Props({ time }) {
  return (
    <div>This was rendered at {time}, and will not be regenerated automatically</div>
  );
}

export async function getStaticProps() {
  const time = new Date().toISOString();
  return {
    props: {
      time,
    },
    revalidate: false,
  };
}
