import { NavBar } from './Components'

interface Props {
  children: JSX.Element
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='max-w-7xl mx-auto min-h-screen'>
      <NavBar />
      {children}
    </div>
  )
}
