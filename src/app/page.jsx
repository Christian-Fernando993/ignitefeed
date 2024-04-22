import { Header } from "@/components/Header";

import { Post } from "@/components/Post";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
  <>
    <Header />

    <div className='w-full max-w-6xl my-8 m-auto px-4 grid grid-cols-wrapper gap-8 items-start'>
      <Sidebar />
      <Post />
    </div>
  </>
  );
}

