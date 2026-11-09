import { NavLink, Outlet } from "react-router";

function LayoutNavbar() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#292923] font-sans antialiased">
      <nav className="flex items-center justify-between px-6 h-16 bg-white border-b border-[#E9E9E3] sticky top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <h2 className="text-lg font-bold text-[#91694E] tracking-tight">
          MYNV
        </h2>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-[#EEE9E2] text-[#91694E] border-[#C8A58B]"
                  : "text-[#62625B] border-transparent hover:bg-gray-50 hover:text-[#292923]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-[#EEE9E2] text-[#91694E] border-[#C8A58B]"
                  : "text-[#62625B] border-transparent hover:bg-gray-50 hover:text-[#292923]"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/carts"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-[#EEE9E2] text-[#91694E] border-[#C8A58B]"
                  : "text-[#62625B] border-transparent hover:bg-gray-50 hover:text-[#292923]"
              }`
            }
          >
            Carts
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-[#EEE9E2] text-[#91694E] border-[#C8A58B]"
                  : "text-[#62625B] border-transparent hover:bg-gray-50 hover:text-[#292923]"
              }`
            }
          >
            Users
          </NavLink>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutNavbar;
