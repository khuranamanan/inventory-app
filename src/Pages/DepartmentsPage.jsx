import { useData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

function DepartmentsPage() {
  const { departments, dispatch } = useData();
  const navigate = useNavigate();

  function handleDepartmentClick(department) {
    dispatch({
      type: "CHANGE_DEP_FILTER",
      payload: {
        filterDep: department,
      },
    });
    navigate("/products");
  }

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-6">
        {departments.map((item) => {
          return (
            <div
              className="px-6 py-4 rounded-md bg-gray-100 cursor-pointer font-medium text-xl"
              key={item}
              onClick={() => handleDepartmentClick(item)}
            >
              <h3 className="department-name">{item}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DepartmentsPage;
