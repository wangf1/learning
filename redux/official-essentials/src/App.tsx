import AddPostForm from "@/src/features/posts/AddPostForm"
import PostsList from "@/src/features/posts/PostsList"
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import { Navbar } from "./app/Navbar"
import SinglePostPage from "@/src/features/posts/SinglePostPage"
import EditPostForm from "@/src/features/posts/EditPostForm"

function App() {
  const HomeElement = (
    <>
      <AddPostForm />
      <PostsList />
    </>
  )
  return (
    <div className="flex flex-col justify-center">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={HomeElement} />
            <Route path="/posts" element={HomeElement} />
            <Route path="/posts/:id" element={<SinglePostPage />} />
            <Route path="/posts/:id/edit" element={<EditPostForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
