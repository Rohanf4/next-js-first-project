import Image from "next/image";
import image1 from "@/assets/banner3.jpg";
export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Image width={600} placeholder="blur" height={337.5} src={image1} alt="" />
      {/* <Image width={600} height={337.5} src="/04.jpg" alt="" /> */}
    </main>
  );
}
