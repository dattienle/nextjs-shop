"use client";
import { useCartStore } from "@/state/cart-store";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function HeaderShoppingCart() {
  const cartStore = useCartStore();
  return (
    <Link href={"/cart"} className="relative">
      <AiOutlineShoppingCart className="w-8 h-8 cursor-pointer" />
      <div className="absolute h-full w-full flex items-center top-0 left-0">
        <span className="text-sm leading-none -mt-1 ml-4">
          {cartStore.list.length}
        </span>
      </div>
    </Link>
  );
}
