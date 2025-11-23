'use client'
import React, { createContext, useReducer, useContext, useEffect } from "react";

// Create Context
const OrderContext = createContext();

// Reducer
const orderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return [...state, action.payload];

    case "UPDATE_ORDER":
      return state.map((order) =>
        order.id === action.payload.id ? { ...order, ...action.payload } : order
      );

    case "REMOVE_ORDER":
      return state.filter((order) => order.id !== action.payload);

    case "CLEAR_ORDERS":
      return [];

    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  // Load from localStorage
  const getStoredOrders = () => {
    try {
      const data = localStorage.getItem("orders");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const [orders, dispatch] = useReducer(orderReducer, [], getStoredOrders);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Actions
  const addOrder = (order) => {
    dispatch({ type: "ADD_ORDER", payload: order });
  };

  const updateOrder = (order) => {
    dispatch({ type: "UPDATE_ORDER", payload: order });
  };

  const removeOrder = (id) => {
    dispatch({ type: "REMOVE_ORDER", payload: id });
  };

  const clearOrders = () => {
    dispatch({ type: "CLEAR_ORDERS" });
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, updateOrder, removeOrder, clearOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Custom Hook
export const useOrder = () => useContext(OrderContext);
