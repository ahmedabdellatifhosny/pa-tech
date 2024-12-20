import {Route, createRoutesFromElements, RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import ClientLayout from './layouts/ClientLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<ClientLayout />} />
    )
  )

  return <RouterProvider router={router} />
}

export default App;
