import { NavLink } from "react-router-dom"

export const Navbar = () => {
  function linkStyle(isActive: boolean) {
    return `px-4 py-2 my-4 rounded ${isActive ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`
  }

  return (
    <nav>
      <section>
        <h1 className="bg-purple-500 text-white text-5xl p-10">
          Redux Essentials Example
        </h1>
        <div className="flex space-x-3 mx-3">
          <NavLink to="/" className={({ isActive }) => linkStyle(isActive)}>
            Posts
          </NavLink>
        </div>
      </section>
    </nav>
  )
}
