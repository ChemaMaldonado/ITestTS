import { AppRoutes } from './routes/AppRoutes'
import { Layout } from './components/Layout'

const App = (): JSX.Element => {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  )
}

export default App
