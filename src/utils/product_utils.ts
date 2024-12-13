import isValidArray from "@/utils/isValidArray";
// [
//     "name",
//     "id",
//     "description",
//     "images",
//     "products-variants",
//     "record_id",
//     "variant_price",
//     "variant_name",
//     "variant_id",
//     "variant_inhouse",
//     "variant_image"
//   ];
export const getProductPrice = (productFields: any) => {
  if (!isValidArray(productFields.variant_image)) return 0;
  return productFields.variant_price.sort((a: number, b: number) => a - b)[0];
};
export const resolveRichtext = (text: any) => {
  return String(text).replace("\\", "").replaceAll("\n", "<br />");
};

// chuyển đổi variant thành array object chứ không phải là key property
export const getProductVariants = (productFields: any) => {
  const keys = [
    "variants",
    "variant_price",
    "variant_name",
    "variant_id",
    "variant_inhouse",
    "variant_image",
  ];

  const rs: any[] = [];
  Array(productFields.variants.length)
    .fill(null)
    .forEach((_, index: number) => {
      const obj: any = {};
      keys.forEach((key: string) => {
        obj[key] = productFields[key] ? productFields[key][index] : null;
      });
      rs.push(obj);
    });
  return rs || null;
};
