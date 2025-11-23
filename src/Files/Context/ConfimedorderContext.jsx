"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";

const ConfirmedOrderContext = createContext();

// Reducer
const confirmedOrderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONFIRMED_ORDER":
      return [...state, action.payload];

    case "REMOVE_CONFIRMED_ORDER":
      return state.filter((order) => order.id !== action.payload);

    case "UPDATE_CONFIRMED_ORDER":
      return state.map((order) =>
        order.id === action.payload.id ? { ...order, ...action.payload } : order
      );

    case "CLEAR_CONFIRMED_ORDERS":
      return [];

    default:
      return state;
  }
};

// Read from localStorage
const loadConfirmedOrders = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("confirmedOrders");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const ConfirmedOrderProvider = ({ children }) => {
  const [confirmedOrders, dispatch] = useReducer(
    confirmedOrderReducer,
    [],
    loadConfirmedOrders
  );

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("confirmedOrders", JSON.stringify(confirmedOrders));
  }, [confirmedOrders]);

  // Actions
  const addConfirmedOrder = (order) => {
    dispatch({ type: "ADD_CONFIRMED_ORDER", payload: order });
  };

  const removeConfirmedOrder = (id) => {
    dispatch({ type: "REMOVE_CONFIRMED_ORDER", payload: id });
  };

  const updateConfirmedOrder = (order) => {
    // order = { id, ...updatedFields }
    dispatch({ type: "UPDATE_CONFIRMED_ORDER", payload: order });
  };

  const clearConfirmedOrders = () => {
    dispatch({ type: "CLEAR_CONFIRMED_ORDERS" });
  };

  return (
    <ConfirmedOrderContext.Provider
      value={{
        confirmedOrders,
        addConfirmedOrder,
        removeConfirmedOrder,
        updateConfirmedOrder, // <-- added here
        clearConfirmedOrders,
      }}
    >
      {children}
    </ConfirmedOrderContext.Provider>
  );
};

// Custom Hook
export const useConfirmedOrders = () => useContext(ConfirmedOrderContext);
