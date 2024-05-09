import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

import Link from "next/link";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post({author, publishedAt, content}) {

const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true,
})

    return(
      <article className="gap-8 bg-gray-800 rounded-lg p-10 mb-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center  gap-4">
            <Avatar src={author.avatarUrl}  />
            <div className="flex flex-col">
              <strong className='text-gray-100 leading-6'>{author.name}</strong>
              <span className='text-gray-400 text-sm leading-6'>{author.role}</span>
            </div>
          </div>
          <div>
              <time 
                  title={publishedDateFormatted} 
                  dateTime={publishedAt.toISOString()}
                  className='text-gray-400 text-sm'
              >
                {publishedDateRelativeToNow}
              </time>
            </div>
        </header>
        <div>
          {content.map(line => {
            if(line.type === 'paragraph'){
              return <p className="mt-4">{line.content}</p>
            } else if (line.type === 'link') {
              return <p className="mt-4">
                <Link href="#" className="font-bold text-green-500 hover:text-green-300 no-underline">
                  {line.content}
                </Link>
              </p>
            }
          })}
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

        <div className=''>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>

    )
}