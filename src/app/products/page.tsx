import ProductsList from "@/components/pages/products/products-list";
import base from "@/utils/airtable";
import isValidArray from "@/utils/isValidArray";

import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
export default async function ProductPage() {
  const data = await base("products").select({}).all();

  if (!isValidArray(data)) {
    return notFound();
  }
  return (
    <div className="container my-14">
      <h1 className="text-2xl font-semibold mb-8">Tất cả sản phẩm</h1>
      <ProductsList data={JSON.stringify(data)} />
    </div>
  );
}
