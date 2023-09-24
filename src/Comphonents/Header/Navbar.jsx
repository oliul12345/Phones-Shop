import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl mb-10 flex justify-between p-3">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl font-bold">Phone Shop</a>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1 text-xl flex gap-6 font-bold gap-3">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active underline text-sky-800 "
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active underline text-sky-800 "
                  : ""
              }
            >
              Favorite
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active underline text-sky-800 "
                  : ""
              }
            >
              LogIn
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
