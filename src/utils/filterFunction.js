export function filterAndSortInventory(inventory, filters, sortOption) {
  return inventory
    .filter((product) => {
      const searchTerm = filters.searchKey.toLowerCase();
      if (searchTerm.length > 0) {
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
        );
      }
      return true;
    })
    .filter((product) => {
      if (filters.departmentFilter === "All") {
        return true;
      }
      return product.department === filters.departmentFilter;
    })
    .filter((product) => {
      if (filters.showLowStockItems) {
        return product.stock <= 10;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        return a.price - b.price;
      } else if (sortOption === "stock") {
        return a.stock - b.stock;
      }
      return 0;
    });
}
