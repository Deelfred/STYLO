import { create } from 'zustand';

export const useCustomerStore = create((set) => ({
  customers: [],
  addCustomer: (customer) =>
    set((state) => ({
      customers: [...state.customers, customer],
    })),
}));
