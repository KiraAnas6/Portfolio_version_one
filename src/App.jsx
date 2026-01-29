import { createBrowserRouter , Router, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
const router = createBrowserRouter([
  {
    path : '/' ,
    element : <Home /> , 
    errorElement : <NotFound />
  } , 
  {
    path : '/about' ,
    element : <About />,
    errorElement : <NotFound />
  } , 
  {
    path : '/contact' ,
    element : <Contact />, 
    errorElement : <NotFound />
  } , 
])
const App = () => {
  return (
    <main className="min-h-screen bg-black-100 text-white font-epilogue relative">
      <RouterProvider router={router} />
    </main>
  )
}

export default App;