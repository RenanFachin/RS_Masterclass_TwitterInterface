import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function Default() {
  return (
    <div className='layout'>
      <Sidebar />

      <div className='content'>
        {/* Precisa aparecer o as páginas */}
        {/* Indicando o local: <Outlet /> */}
        <Outlet />
      </div>
    </div>
  )
}