import Image from "next/image";
import profilePic from "@/image/icon.jpeg";

export default function Home() {
  return (
    <>
      <h1>My HomePage </h1>
      <Image src={profilePic} alt="プロフィール写真" />
      <p>welcome to my homePage!</p>
    </>
  );
}
