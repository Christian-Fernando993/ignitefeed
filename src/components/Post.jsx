import Image from "next/image";
import Link from "next/link";

import Avatar from "@/assets/Avatar.jpg";

export function Post() {
    return(
      <article className="gap-8 bg-gray-800 rounded-lg p-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center  gap-4">
            <Image 
              src={Avatar} 
              alt=""
              className='w-16 h-16 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500'
          />
            <div className="flex flex-col">
              <strong className='text-gray-100 leading-6'>Christian Pereira</strong>
              <span className='text-gray-400 text-sm leading-6'>Front End</span>
            </div>
  
          </div>
          <div>
              <time 
                  title="22 de Abril de 2024" 
                  dateTime="2024-04-22 15:00:00"
                  className='text-gray-400 text-sm'
              >
                Públicado há 1h
              </time>
            </div>
        </header>
        <div>
          <p className="mt-4">Fala galeraa 👋</p>
          <p className="mt-4">
            Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          </p>
          <p className="mt-4">👉{' '}
            <Link href="#" className="font-bold text-green-500 hover:text-green-300 no-underline">
              jane.design/doctorcare
            </Link>
          </p>
          <p className="mt-4">
            <Link href="#" className="font-bold text-green-500 hover:text-green-300 no-underline">#novoprojeto </Link>{' '}
            <Link href="#" className="font-bold text-green-500 hover:text-green-300 no-underline">#nlw</Link> {' '}
            <Link href="#" className="font-bold text-green-500 hover:text-green-300 no-underline">#rocketseat</Link>
          </p>
        </div>
        <form className='w-full mt-6 pt-6 border border-transparent border-t-gray-600 flex flex-col group'>
          <strong className='text-gray-100 leading-6 mb-4'>Deixe seu Feedback</strong>
          <textarea 
              className='border-0 resize-none h-24 w-full text-gray-100 bg-gray-900 leading-5 rounded-lg p-4' 
              placeholder='Escreva um comentário...' 
          />
          <footer className='invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none'>
              <button 
                  type='submit'
                  className='inline-flex py-4 px-6 mt-4 rounded-lg bg-green-500 text-white justify-center items-center w-28 hover:bg-green-300  font-bold transition'
              >
                  Publicar
              </button>
          </footer>
  
        </form>
      </article>

    )
}