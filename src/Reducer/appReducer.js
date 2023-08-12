import { toast } from "react-toastify";
import { inventoryData } from "../Data/data";

export const appInitialState = {
  inventory: JSON.parse(localStorage.getItem("inventory")) || inventoryData,
  searchKey: "",
  departmentFilter: "All",
  showLowStockItems: false,
  sortOption: "name",
};

export function appReducer(state, action) {
  switch (action.type) {
    case "CHANGE_DEP_FILTER": {
      return { ...state, departmentFilter: action.payload.filterDep };
    }

    case "CHANGE_SEARCH_KEY": {
      return { ...state, searchKey: action.payload.searchTerm };
    }

    case "CHANGE_LOW_STOCK_FILTER": {
      return { ...state, showLowStockItems: !state.showLowStockItems };
    }

    case "ADD_PRODUCT": {
      toast.success("New Product Added");
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    }

    case "SORT_PRODUCTS": {
      return {
        ...state,
        sortOption: action.payload,
      };
    }

    default:
      return state;
  }
}
