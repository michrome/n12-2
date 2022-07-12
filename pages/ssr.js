export default function SSR({ data }) {
  return (
    <main>
      <h1>ssr</h1>
      <p>{data}</p>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://skateipsum.com/get/1/1/JSON/`);
  const data = await res.json();

  return { props: { data } };
}
