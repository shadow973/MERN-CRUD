import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserList from './component/UserList'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<UserList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}