import { NavLink, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="">
        <header>
            <nav className=" bg-slate-300 shadow-2xl">
                <div className=" container mx-auto text-xl font-bold flex justify-evenly">
                    <NavLink to={'/'}   className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                     >
                        Home
                    </NavLink>
                    <NavLink to={'/category'}   className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                     >
                        Categories
                    </NavLink>
                    <NavLink to={'/product'}   className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                     >
                        Products
                    </NavLink>
                    <NavLink to={'/todo'}   className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                     >
                        Todo
                    </NavLink>
                </div>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Layout