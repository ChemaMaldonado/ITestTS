import { Link } from 'react-router-dom'

interface PostCardProps {
  author: string
  title: string
  image: string
  id: string
}

export const PodcastCard = ({ author, title, image, id }: PostCardProps): JSX.Element => {
  return (
    <div className='mt-24'>
      <Link to={`podcast/${id}`} state='podcasts'>
        <div className='max-w-sm mx-auto mt-6 break-words bg-white mb-6 shadow-lg rounded-xl cursor-pointer hover:bg-slate-100'>
          <div className='px-6'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full flex justify-center'>
                <div className='relative'>
                  <img
                    src={image}
                    className='shadow-xl rounded-full border-none absolute -ml-14 -m-8 h-[120px] max-w-[500px]'
                  />
                </div>
              </div>
              <div className='w-full text-center mt-20'>
                <div className='flex justify-center lg:pt-4 pt-8 pb-0'>
                  <div className='text-center mt-2'>
                    <h3 className='text-lg text-slate-700 font-bold leading-normal mb-1'>{title}</h3>
                    <div className='text-xs mt-0 mb-5 text-slate-400 font-bold'>
                      Author: {author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
