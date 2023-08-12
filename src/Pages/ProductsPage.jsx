import { Link, useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext";
import FilterBox from "../Components/FilterBox";
import { filterAndSortInventory } from "../utils/filterFunction";

function ProductsPage() {
  const { state } = useData();
  const navigate = useNavigate();

  const filteredInventory = filterAndSortInventory(
    state.inventory,
    {
      searchKey: state.searchKey,
      departmentFilter: state.departmentFilter,
      showLowStockItems: state.showLowStockItems,
    },
    state.sortOption
  );

  return (
    <div className="p-4 flex flex-col gap-4 w-full">
      <div className="flex justify-between flex-wrap gap-2">
        <h3 className="font-bold text-2xl">Products</h3>
        <button
          onClick={() => navigate("/products/addproduct")}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-sm rounded text-white w-fit"
        >
          Add New Product
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="font-medium text-lg">Filters:</h4>
        <FilterBox />
      </div>

      {filteredInventory.length === 0 ? (
        <div>No Products Found Matching Filter</div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 w-80">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-24 w-24 object-contain rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {product.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 w-80 whitespace-wrap">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.supplier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
