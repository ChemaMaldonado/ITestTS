import { Link } from 'react-router-dom'
import { fetchPodcasts } from '../../services/api'
import { useQuery } from 'react-query'

export const PodcastDetailCard = ({ id }) => {
  const { data: podcasts } = useQuery(['podcasts'], fetchPodcasts)
  const podcastDetails = podcasts?.feed?.entry?.filter(podcast => podcast.id.attributes['im:id'] === id)[0]
  return (
    <div className='px-4 xl:w-96'>
      <div className='flex flex-wrap justify-center'>
        <Link to={`/podcast/${podcastDetails?.id?.attributes['im:id']}`}>
          <div className='w-full flex justify-center'>
            <div className='relative'>
              <img
                src={podcastDetails && podcastDetails['im:image'][0].label}
                className='rounded-md border-none h-[120px] max-w-[500px]'
              />
            </div>
          </div>
          <div className='w-full text-center'>
            <div className='flex justify-center lg:pt-4 pt-8 pb-0'>
              <div className='text-center mt-2'>
                <h3 className='text-lg text-slate-700 font-bold leading-normal mb-1'>{podcastDetails && podcastDetails['im:name'].label}</h3>
                <div className='text-xs mt-0 mb-5 text-slate-400 font-bold'>
                  Author: {podcastDetails && podcastDetails['im:artist'].label}
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className='w-full border-b border-b-gray-200' />
        <div className='w-full'>
          <div className='flex flex-col pt-4 pb-0'>
            <div className='mt-2'>
              <p className='text-xs text-slate-700 font-bold leading-normal mb-1'>Description:</p>
              <div className='text-xs mt-0 mb-5 text-slate-400 font-bold'>
                <p className='italic'>{podcastDetails?.summary?.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
