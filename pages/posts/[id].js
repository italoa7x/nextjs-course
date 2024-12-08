import Link from "next/link";
import { useRouter } from "next/router";
export default function Post() {
  const router = useRouter();

  const handleToAbout = () => {};
  console.log(router);
  return (
    <div>
      post sobre {router.query.id}
      <Link href={"/about"}>ir para sobre</Link>
    </div>
  );
}
