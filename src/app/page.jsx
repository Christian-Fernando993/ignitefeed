import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
  <>
    <Header />

    <div className='w-full max-w-6xl my-1 m-auto px-4 grid grid-cols-wrapper gap-8 items-start'>
      <Sidebar className='' />
      <main className=''>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fuga, perferendis. Sed vel quibusdam est adipisci amet at repudiandae maiores, nihil nam, 
          similique alias rerum debitis consectetur! Repudiandae sint a libero ab nemo explicabo saepe 
          cupiditate quae reiciendis accusamus voluptatem dolorum illum earum dolores corporis, dolorem 
          animi optio expedita recusandae. Nisi.
        </p>
        
      </main>
    </div>
  </>
  );
}

