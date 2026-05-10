import Header from "./Header"
import {Outlet} from "react-router"
function RootLayout() {
  return (
    <div >
        <Header />
        <div className="min-h-screen mx-20 p-20 border-2 border-gray-400 rounded-lg">
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout