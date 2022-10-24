import { useEffect, useState } from 'react'

import { EpisodesTable } from '../Podcast/Podcast'
import { PodcastDetailCard } from '../../components/PodcastDetailCard/PodcastDetailCard'
import { fetchPodcastsDetails } from '../../services/api'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'

export const Episode = (): JSX.Element => {
  const location = useLocation()
  const podcastId = location.pathname.split('/')[2]
  const episodeId = location.pathname.split('/')[4]
  const { data, error, isLoading } = useQuery(['podcast-id', podcastId], async () => await fetchPodcastsDetails(podcastId))

  const episodeDetails = data?.results?.filter(episode => episode.trackId == episodeId)[0]
  const [trackSrc, setTrackSrc] = useState(episodeDetails?.previewUrl)
  useEffect(() => {
    setTrackSrc(episodeDetails?.previewUrl)
  }, [episodeDetails])

  return (
    <div className='w-full mt-10 flex-col xl:flex xl:flex-row justify-between space-y-10 xl:space-y-0 xl:space-x-10 mb-5 px-10 xl:px-0'>
      <div className='w-full xl:w-auto h-full shadow-xl border border-slate-200 rounded-md pt-5'>
        <PodcastDetailCard id={podcastId} />
      </div>
      <div className='w-full xl:w-3/4 h-full'>
        <div className='w-full shadow-lg p-3 border border-slate-200 rounded-md'>
          <p className='font-bold text-2xl'>{episodeDetails?.trackName}</p>
          <p className='italic text-sm pt-3 text-slate-400 font-bold'>{episodeDetails?.description}</p>
          <audio id='audioId' controls className='w-full mt-5'>
            {episodeDetails?.previewUrl && <source src={trackSrc} type='audio/ogg' />}
          </audio>
        </div>
      </div>
    </div>
  // <div className='w-full mt-10 flex-col md:flex md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10 px-5'>
  //   <div className='w-full md:w-1/4 h-full shadow-xl border border-slate-200 rounded-md pt-5'>
  //     <PodcastDetailCard id={podcastId} />
  //   </div>
  //   <div className='w-full md:w-3/4 h-full shadow-lg pt-10 p-5'>
  //     <p className='font-bold text-xl'>{episodeDetails?.trackName}</p>
  //     <p className='italic text-xs pt-3 text-slate-400 font-bold'>{episodeDetails?.description}</p>
  //     <audio controls className='w-full mt-5'>
  //       <source src={trackSrc} type='audio/mp3' />
  //     </audio>
  //   </div>
  // </div>

  // <div className='w-full mt-10 flex-col md:flex md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10 px-5'>
  // <div className='w-full md:w-1/4 h-full shadow-xl border border-slate-200 rounded-md pt-5'>
  //   <PodcastDetailCard id={podcastId} />
  // </div>
  // <div className='w-full md:w-3/4 h-full '>
  //   <div className='w-full shadow-lg p-3 border border-slate-200 rounded-md'>
  //     <p className='font-mono font-bold text-lg'>Episodes: <span>{data?.resultCount}</span></p>
  //   </div>
  //   <div className='w-full shadow-lg pt-10'>
  //     <EpisodesTable episodes={data?.results} />
  //   </div>
  // </div>
  // </div>

  // <div className='mt-5 px-10 w-full flex flex-col md:flex-row md:justify-between space-y-10 md:space-x-10 md:space-y-0'>
  //   <div className='w-1/4'>
  //     <PodcastDetailCard id={podcastId} />
  //   </div>
  //   <div className='w-full md:w-3/4 border border-slate-50 bg-white rounded-lg p-2'>
  //     <div className='w-full shadow-lg p-2 pt-10'>
  //       <p className='font-bold text-xl'>{episodeDetails?.trackName}</p>
  //       <p className='italic text-xs pt-3 text-slate-400 font-bold'>{episodeDetails?.description}</p>
  //       <audio controls className='w-full mt-5'>
  //         <source src={trackSrc} type='audio/mp3' />
  //       </audio>
  //     </div>
  //   </div>
  // </div>
  )
}
