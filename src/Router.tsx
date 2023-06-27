import { Route, Routes } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Auth } from './pages/Auth'
import { Home } from './pages/Home'
import { Room } from './pages/Room'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}
