import PublicLayout from "@/layout/PublicLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./router"
import NotFoundPage from "@/page/404"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
