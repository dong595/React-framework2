import { NavLink, Outlet } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
interface Props {
  children?: React.ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  console.log(children);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <aside
          className="absolute left-0 top-0 z-9999 flex h-screen w-80 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg">
            <ul className="space-y-2 uppercase">
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    `flex items-center rounded-lg text-gray-600 ${
                      isActive ? "bg-gray-300 font-medium   text-gray-900" : ""
                    } p-2 text-base  hover:text-gray-600 hover:bg-gray-300`
                  }
                >
                  <FaStore />
                  <span className="ml-3 ">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/products"
                  className={({ isActive }) =>
                    `flex items-center rounded-lg text-gray-600 ${
                      isActive ? "bg-gray-300 font-medium  text-gray-900" : ""
                    } p-2 text-base  hover:text-gray-600 hover:bg-gray-300`
                  }
                >
                  <BsBasketFill />
                  <span className="ml-3 flex items-center gap-2">Product</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
        <main className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
