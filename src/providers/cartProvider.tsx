import { JSX, createContext, useContext } from "solid-js";
import { ShirtType } from "../types/shirtCard";
import { createStore } from "solid-js/store";
import { type SetStoreFunction } from "solid-js/store";

interface ShirtCart extends ShirtType {
  quantity: number;
}

interface CartContextType {
  items: ShirtCart[];
  setItems: SetStoreFunction<ShirtCart[]>;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider(props: { children: JSX.Element }) {
  const [items, setItems] = createStore<ShirtCart[]>([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}
