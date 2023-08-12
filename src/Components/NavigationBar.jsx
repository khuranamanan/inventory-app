import { NavLink } from "react-router-dom";

function NavigationBar() {
  function handleClassNames({ isActive }) {
    return `text-lg   ${
      isActive
        ? "text-white hover:text-gray-100 font-bold"
        : "text-gray-500 hover:text-gray-300"
    }`;
  }

  return (
    <div className="bg-gray-900 text-white px-8 sm:w-72">
      <div className="container mx-auto px-4 py-3 flex gap-8 items-center flex-col">
        <h1 className="text-2xl font-bold text-center">
          Inventory Management App
        </h1>
        <div className="flex gap-6 items-center justify-center flex-wrap sm:flex-col">
          <NavLink to={"/"} className={handleClassNames}>
            Dashboard
          </NavLink>
          <NavLink to={"/departments"} className={handleClassNames}>
            Departments
          </NavLink>
          <NavLink to={"/products"} className={handleClassNames}>
            Products
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
