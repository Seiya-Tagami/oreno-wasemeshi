import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import CreateWasemeshi from "./pages/CreateWasemeshi"
import Home from "./pages/Home"

const Layout = () => {
  const queryClient = new QueryClient()
  return (
    <div className='app'>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/create",
        element: <CreateWasemeshi />
      }
    ]
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App