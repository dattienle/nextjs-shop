import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type TCartItem = {
  product: any;
  product_variant: any;
  variant_id: string;
  quantity: number;
};
type State = {
  list: TCartItem[];
};
type Actions = {
  add: (props: TCartItem) => void;
  increaseQuantity: (props: { variant_id: string; quantity: number }) => void;
  updateQuantity: (props: { variant_id: string; quantity: number }) => void;
  deleteCartItem: (props: { variant_id: string }) => void;
  reset: () => void;
};

export const useCartStore = create<State & Actions>()(
  persist(
    immer((set, getState) => ({
      list: [],
      add: (props: TCartItem) => {
        const curState = getState();
        const foundItemIndex = curState.list.findIndex(
          (item) => item.variant_id === props.variant_id
        );
        if (foundItemIndex >= 0) {
          curState.increaseQuantity({
            ...props,
          });
        } else {
          set((state) => {
            state.list.push(props);
          });
        }
      },
      increaseQuantity: (props) => {
        const curState = getState();
        const foundItemIndex = curState.list.findIndex(
          (item) => item.variant_id === props.variant_id
        );
        set((state) => {
          state.list[foundItemIndex].quantity += props.quantity;
        });
      },
      updateQuantity: (props) => {
        const curState = getState();
        const foundItemIndex = curState.list.findIndex(
          (item) => item.variant_id === props.variant_id
        );
        set((state) => {
          state.list[foundItemIndex].quantity = props.quantity;
        });
      },
      deleteCartItem: (props) => {
        const curState = getState();
        const foundItemIndex = curState.list.findIndex(
          (item) => item.variant_id === props.variant_id
        );
        set((state) => {
          state.list.splice(foundItemIndex, 1);
        });
      },
      reset: () => {
        set((state) => {
          state.list = [];
        });
      },
    })),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      //   partialize giúp chỉ lưu lại những phần state cần thiết
      partialize: (state) => ({
        list: state.list,
      }),
    }
  )
  // giúp lưu state vào local storage
);
