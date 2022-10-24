import { useLocation, useNavigate } from 'react-router-dom'

function padTo2Digits (num) {
  return num.toString().padStart(2, '0')
}

function convertMsToMinutesSeconds (milliseconds) {
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = Math.round((milliseconds % 60000) / 1000)

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds)}`
}

function formatDate (date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear()
  ].join('/')
}

export const EpisodesTable = ({ episodes }) => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className='w-full'>
      <div className='h-[550px] overflow-auto border rounded-lg'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-slate-200 sticky top-0'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
              >
                Duration
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
              >
                Title
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {episodes?.filter((_, key) => key !== 0).map((episode, key) => (
              <tr onClick={() => navigate(`${location.pathname}/episode/${episode.trackId}`)} key={episode.trackId} className={`${(key % 2) !== 0 ? 'bg-slate-100' : ''} cursor-pointer`}>
                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {episode.trackTimeMillis ? convertMsToMinutesSeconds(episode.trackTimeMillis) : '--:--'}
                </td>
                <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                  {episode.trackName}
                </td>
                <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                  {formatDate(new Date(episode.releaseDate))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
