export const SearchBar: React.FC = () => {
  return (
    <div className='w-full flex justify-center lg:justify-end items-center space-x-5 mt-5'>
      <span className='bg-blue-400 text-white py-1 px-2 rounded-md'>{podcasts.filter(filterPodcasts).length}</span>
      <input type='text' onChange={setQuery} className='w-full lg:w-1/3 border border-gray-400 h-10 rounded-md px-5' placeholder='Filter podcasts...' />
    </div>
  )
}
