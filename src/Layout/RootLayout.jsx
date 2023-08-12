import { Outlet } from "react-router";
import NavigationBar from "../Components/NavigationBar";

function RootLayout() {
  return (
    <div className="min-h-screen sm:grid sm:grid-cols-[auto_1fr] w-full">
      <NavigationBar />

      <div className="p-2 overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
