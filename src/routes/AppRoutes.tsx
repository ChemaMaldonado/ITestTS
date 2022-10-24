import { Route, Routes } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { Episode } from '../pages/Episode'
import { Error } from '../pages/Error'
import { Podcast } from '../pages/Podcast'
import { paths } from './paths'

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<Dashboard />} />
      <Route path={paths.PODCAST} element={<Podcast />} />
      <Route path={paths.EPISODE} element={<Episode />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}
