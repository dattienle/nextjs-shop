import ProductVariantSelection from "@/components/pages/products/product-variant-selection";
import base from "@/utils/airtable";
import isValidArray from "@/utils/isValidArray";
import { resolveRichtext } from "@/utils/product_utils";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default async function SingleProduct({
  params,
}: {
  params: { productId: string };
}) {
  const data = await base("products")
    .select({
      filterByFormula: `RECORD_ID() = "${params.productId}"`,
    })
    .all();
  if (!isValidArray(data)) {
    return <>Not found</>;
  }
  const product = data[0];
  return (
    <div className="container my-6">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="sticky top-24">
            <ProductImageThumbnail product={product} />
          </div>
        </div>
        <div className="flex-grow flex gap-6">
          {/* flex-shrink để không bị chèn lại */}
          <div className="w-1/2 flex-shrink-0">
            <ProductImages product={product} />
          </div>
          {/* flex-grow để lấy kích thước rộng hơn */}
          <div className="flex-gorw">
            <h1 className="my-4 text-4xl">{String(product.fields.name)}</h1>
            <ProductVariantSelection product={JSON.stringify(product)} />
            <div className="my-8">
              <div
                dangerouslySetInnerHTML={{
                  __html: marked.parse(
                    resolveRichtext(product.fields.description)
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const ProductImageThumbnail = ({ product }: { product: any }) => {
  if (!isValidArray(product.fields?.images)) return <>No image found</>;
  return (
    <div className="flex flex-col gap-2">
      {product.fields.images.map((image: any, index: number) => (
        <Link key={image.id} href={`#${image.id}`}>
          <Image
            src={image.url}
            alt={product.fields.name}
            width={150}
            height={150}
          />
        </Link>
      ))}
    </div>
  );
};
const ProductImages = ({ product }: { product: any }) => {
  if (!isValidArray(product.fields?.images)) return <>No image found</>;
  return (
    <div className="flex flex-col gap-2">
      {product.fields.images.map((image: any, index: number) => (
        <Fragment key={image.id}>
          <Image
            className="w-full"
            src={image.url}
            alt={product.fields.name}
            width={image.width}
            height={image.height}
            id={image.id}
          />
        </Fragment>
      ))}
    </div>
  );
};
