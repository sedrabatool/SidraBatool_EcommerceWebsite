import { createSlice } from '@reduxjs/toolkit';

// Helper function to check if running in the browser
const isBrowser = typeof window !== 'undefined';

// Load initial state from local storage
const loadStateFromLocalStorage = () => {
  if (isBrowser) { // Only access localStorage in the browser
    try {
      const serializedState = localStorage.getItem('cartState');
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
      localStorage.setItem('cartState', serializedState);
    } catch (error) {
      console.error('Error saving state to local storage:', error);
    }
  }
};

const initialState = loadStateFromLocalStorage();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
      saveStateToLocalStorage(state); // Save state to local storage
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveStateToLocalStorage(state); // Save state to local storage
    },
  },
});

// Export actions
export const { add, remove } = cartSlice.actions;

// Selector to get the items from the state
export const selectCartItems = (state) => state.cart.items;

// Export the reducer
export default cartSlice.reducer;