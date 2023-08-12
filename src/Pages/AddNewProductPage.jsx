import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useData } from "../Context/DataContext";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";

function AddNewProductPage() {
  const { dispatch, departments } = useData();
  const initialFormData = {
    department: "",
    newDepartment: "",
    name: "",
    description: "",
    price: 0,
    stock: 1,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleAddProduct(event) {
    event.preventDefault();

    if (
      formData.department.trim() === "" ||
      (formData.department.trim() === "New Department" &&
        formData.newDepartment.trim() === "") ||
      formData.name.trim() === "" ||
      formData.description.trim() === "" ||
      formData.price.trim() <= 0 ||
      formData.stock.trim() <= 0 ||
      formData.sku.trim() === "" ||
      formData.supplier.trim() === "" ||
      formData.delivered < 0
    ) {
      toast.warn("Please fill out all required fields");
      return;
    }

    const departmentToAdd =
      formData.department === "New Department"
        ? formData.newDepartment
        : formData.department;

    const placeholderImageUrl = "https://picsum.photos/200/300";

    const newProduct = {
      id: uuidv4(),
      ...formData,
      department: departmentToAdd,
      imageUrl: formData.imageUrl || placeholderImageUrl,
    };

    dispatch({ type: "ADD_PRODUCT", payload: newProduct });

    setFormData(initialFormData);
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 hover:bg-gray-600 p-2 rounded-full text-white mb-4"
      >
        <AiOutlineArrowLeft />
      </button>
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <div>
          <label htmlFor="department" className="block font-medium mb-1">
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
            <option value="New Department">New Department</option>
          </select>
          {formData.department === "New Department" && (
            <div className="mt-2">
              <input
                type="text"
                id="newDepartment"
                name="newDepartment"
                value={formData.newDepartment}
                onChange={handleInputChange}
                placeholder="Enter new department name"
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
          )}
        </div>
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-medium mb-1">
            Price (in $)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="stock" className="block font-medium mb-1">
            Stock (Quantity)
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="sku" className="block font-medium mb-1">
            SKU (Stocking Unit)
          </label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={formData.sku}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="supplier" className="block font-medium mb-1">
            Supplier Name
          </label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={formData.supplier}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="delivered" className="block font-medium mb-1">
            Items Delivered
          </label>
          <input
            type="number"
            id="delivered"
            name="delivered"
            value={formData.delivered}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProductPage;
