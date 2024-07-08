import AddPostForm from "@/src/features/posts/AddPostForm"
import PostsList from "@/src/features/posts/PostsList"
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import { Navbar } from "./app/Navbar"

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddPostForm />
                  <PostsList />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
