"use client";
import isValidArray from "@/utils/isValidArray";
import { getProductPrice } from "@/utils/product_utils";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function ProductsList(props: { data: any }) {
  const data = JSON.parse(props.data);
  // console.log(data[0].fields);
  // ['id', 'name', 'description', 'images', 'products-variants', 'record_id']
  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((product: any, index: number) => (
        <Fragment key={index}>
          <Link href={`/products/${product.id}`}>
            <ProductImage product={product} />
            <p className="line-clamp-2">{product.fields.name}</p>
            <p className="font-bold">
              {getProductPrice(product.fields).toLocaleString("vi-VN")}đ
            </p>
          </Link>
        </Fragment>
      ))}
    </div>
  );
}

const ProductImage = ({ product }: { product: any }) => {
  if (!isValidArray(product.fields?.images)) return <>No image found</>;
  return (
    <>
      <Image
        className=" aspect-square w-full"
        src={product.fields.images[0].url}
        alt={product.fields.name}
        width={product.fields.images[0].width}
        height={product.fields.images[0].height}
      />
    </>
  );
};
