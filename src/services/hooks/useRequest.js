import { useQuery } from 'react-query'

export const useRequest = ({ requestId, params, func }) => {
  const { data, isLoading } = useQuery(
    [requestId, params],
    async () => await func,
    { onError: (error) => console.error(error) })

  return { data, isLoading }
}
