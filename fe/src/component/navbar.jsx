import {
  ArrowRightLeft,
  ChartNoAxesCombined,
  LayoutDashboard,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarItems = [
    { name: "Dashboard", to: "/", icon: <LayoutDashboard /> },
    { name: "Transaksi", to: "/transaksi", icon: <ArrowRightLeft /> },
    { name: "Laporan", to: "/laporan", icon: <ChartNoAxesCombined /> },
  ];

  return (
    <>
      <div className="flex flex-col gap-2 bg-[#131920] px-2 w-60">
        <div className="flex gap-2 text-lg items-center py-2">
          <div className="bg-[#3486FF] p-2 rounded-lg">
            <Wallet className="text-white" />
          </div>
          <span className="font-bold text-white">Uang Kas</span>
        </div>
        <div className="flex flex-col gap-1">
          {navbarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center p-4 font-semibold ` +
                (isActive
                  ? "text-white rounded-lg bg-gray-200/10"
                  : "text-white/40 bg-transparent hover:bg-gray-200/10 hover:rounded-lg")
              }
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
