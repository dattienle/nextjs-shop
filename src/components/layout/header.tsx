import HeaderDropdownMenu from "@/components/layout/header-dropdown-menu";
import HeaderShoppingCart from "@/components/layout/header-shopping-cart";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow">
      <div className="container flex items-center justify-between gap-5 h-24">
        <Link href={"/"} className="text-red-800 text-4xl italic font-bold">
          TeDisports
        </Link>
        <div className="hidden lg:flex gap-12">
          <Link href={"/"}> Trang chủ</Link>
          <Link href={"/products"}>Sản phẩm</Link>
          <Link href={"/about"}>About</Link>
        </div>
        <div className="flex items-center gap-5">
          <HeaderShoppingCart />
          <HeaderDropdownMenu />
        </div>
      </div>
    </header>
  );
}
