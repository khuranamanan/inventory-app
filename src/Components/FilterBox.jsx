import { useData } from "../Context/DataContext";

function FilterBox() {
  const { state, dispatch, departments } = useData();

  return (
    <div className="flex gap-4 flex-col sm:flex-row flex-wrap justify-around items-center">
      <input
        type="text"
        placeholder="Search..."
        value={state.searchKey}
        className="border border-gray-200 px-4 py-2 rounded-md"
        onChange={(e) =>
          dispatch({
            type: "CHANGE_SEARCH_KEY",
            payload: {
              searchTerm: e.target.value,
            },
          })
        }
      />

      <label className="flex gap-2 items-center">
        By Department:
        <select
          value={state.departmentFilter}
          className="border border-gray-200 px-4 py-2 rounded-md"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_DEP_FILTER",
              payload: { filterDep: e.target.value },
            })
          }
        >
          <option value="All">All Departments</option>
          {departments.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </label>

      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={state.showLowStockItems}
          onChange={() =>
            dispatch({
              type: "CHANGE_LOW_STOCK_FILTER",
            })
          }
        />
        Show Low Stock Items
      </label>

      <label className="flex gap-2 items-center">
        Sort By:
        <select
          value={state.sortOption}
          className="border border-gray-200 px-4 py-2 rounded-md"
          onChange={(e) =>
            dispatch({
              type: "SORT_PRODUCTS",
              payload: e.target.value,
            })
          }
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </label>
    </div>
  );
}

export default FilterBox;
