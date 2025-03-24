import { createSlice } from '@reduxjs/toolkit';

// Helper function to check if running in the browser
const isBrowser = typeof window !== 'undefined';

// Load initial state from local storage
const loadStateFromLocalStorage = () => {
  if (isBrowser) { // Only access localStorage in the browser
    try {
      const serializedState = localStorage.getItem('productState');
      if (serializedState === null) {
        return { items: [] }; // Default state if no saved state exists
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Error loading state from local storage:', error);
      return { items: [] }; // Fallback to default state
    }
  }
  return { items: [] }; // Return default state on the server
};

// Save state to local storage
const saveStateToLocalStorage = (state) => {
  if (isBrowser) { // Only access localStorage in the browser
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('productState', serializedState);
    } catch (error) {
      console.error('Error saving state to local storage:', error);
    }
  }
};

const initialState = loadStateFromLocalStorage();

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Add a product to the cart
    addProduct: (state, action) => {
      state.items.push(action.payload);
      saveStateToLocalStorage(state); // Save state to local storage
    },
    // Remove a specific product from the cart
    removeProduct: (state, action) => {
      const itemId = action.payload; // Assuming each item has a unique `id`
      state.items = state.items.filter((item) => item.id !== itemId);
      saveStateToLocalStorage(state); // Save state to local storage
    },
  },
});

// Export actions
export const { addProduct, removeProduct } = productSlice.actions;

// Selector to get the items from the state
export const selectProductsItems = (state) => state.product.items;

// Export the reducer
export default productSlice.reducer;