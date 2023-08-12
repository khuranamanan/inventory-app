import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ProductDetailsPage() {
  const {
    state: { inventory },
  } = useData();
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProduct = inventory.find(
    (product) => product.id.toString() === id
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 hover:bg-gray-600 p-2 rounded-full text-white mb-4"
      >
        <AiOutlineArrowLeft />
      </button>
      <div className="flex items-center">
        <div className="w-1/3">
          <img
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            className="h-auto max-w-full rounded"
          />
        </div>
        <div className="w-2/3 ml-4">
          <h2 className="text-xl font-semibold mb-2">{selectedProduct.name}</h2>
          <p className="text-gray-600">{selectedProduct.description}</p>
          <p className="text-gray-800 mt-2">${selectedProduct.price}</p>
          <p className="text-gray-800 mt-2">Stock: {selectedProduct.stock}</p>
          <p className="text-gray-800 mt-2">
            Supplier: {selectedProduct.supplier}
          </p>
          <p className="text-gray-800 mt-2">Sku: {selectedProduct.sku}</p>
          <p className="text-gray-800 mt-2">
            Department: {selectedProduct.department}
          </p>
          <p className="text-gray-800 mt-2">
            Delivered: {selectedProduct.delivered}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
