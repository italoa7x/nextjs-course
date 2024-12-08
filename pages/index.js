import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      Ola
      <img src="/images/avatar.jpg" width={200} height={200} />
      <Link href="/about">ir para sobre</Link>
    </div>
  );
};

export default HomePage;
