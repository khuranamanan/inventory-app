import { useData } from "../Context/DataContext";

function DashboardPage() {
  const { state } = useData();

  const totalStock = state.inventory.reduce((acc, value) => {
    return acc + +value.stock;
  }, 0);

  const totalDelivered = state.inventory.reduce((acc, value) => {
    return acc + +value.delivered;
  }, 0);

  const lowInStock = state.inventory.reduce((acc, value) => {
    return +value.stock <= 10 ? acc + 1 : acc;
  }, 0);

  return (
    <div className="p-3">
      <div className="flex flex-wrap gap-4">
        <div className="py-4 px-6 flex flex-col text-xl justify-center items-center bg-gray-100 rounded-md">
          <span className="text-2xl text-green-500 font-bold">
            {totalStock}
          </span>
          Total Stock
        </div>
        <div className="py-4 px-6 flex flex-col text-xl justify-center items-center bg-gray-100 rounded-md">
          <span className="text-2xl text-yellow-500 font-bold">
            {totalDelivered}
          </span>
          Delivered
        </div>
        <div className="py-4 px-6 flex flex-col text-xl justify-center items-center bg-gray-100 rounded-md">
          <span className="text-2xl text-red-500 font-bold">{lowInStock}</span>
          Low in Stock
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
