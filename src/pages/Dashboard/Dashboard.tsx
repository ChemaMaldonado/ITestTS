import { PodcastCard } from './Components'
import { fetchPodcasts } from '../../services/api'
import { useQuery } from 'react-query'
import { useState } from 'react'

export const Dashboard = (): JSX.Element => {
  const { data: podcasts, error, isLoading } = useQuery(['podcasts'], fetchPodcasts)
  const [query, setQuery] = useState()

  const filterPodcasts: boolean | PodcastProps = (podcast: PodcastProps) => {
    if (query !== undefined) {
      return ((podcast['im:name'].label).toLowerCase().includes((query?.target.value).toLowerCase()) ||
      (podcast['im:artist'].label).toLowerCase().includes((query?.target.value).toLowerCase()))
    }
    return podcast
  }

  if (error !== null) console.error('An error ocurred', error)

  return (
    <div className='px-10'>
      {/* This must be a component */}
      <div className='w-full flex justify-center lg:justify-end items-center space-x-5 mt-5'>
        <span className='bg-blue-400 text-white py-1 px-2 rounded-md'>{podcasts?.feed?.entry?.filter(filterPodcasts).length}</span>
        <input type='text' onChange={setQuery} className='w-full lg:w-1/3 border border-gray-400 h-10 rounded-md px-5' placeholder='Search by artist or title...' />
      </div>
      {isLoading
        ? <div className='w-full mt-96 flex justify-center items-center'><span className='animate-pulse'>Loading..</span></div>
        : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2'>
            {podcasts?.feed?.entry.filter(filterPodcasts)
              .map((item: PodcastProps) => {
                return (
                  <div key={item.id.attributes['im:id']}>
                    <PodcastCard
                      title={item['im:name'].label}
                      author={item['im:artist'].label}
                      image={item['im:image'][0].label}
                      id={item.id.attributes['im:id']}
                    />
                  </div>
                )
              })}
          </div>
          )}
    </div>
  )
}
