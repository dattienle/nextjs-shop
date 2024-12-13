import Homepage from "@/components/pages/homepage";
import base from "@/utils/airtable";

import Image from "next/image";
import { Fragment } from "react";
export default async function Home() {
  const data = await base("products").select({}).all();
  return (
    <Fragment>
      <Homepage data={JSON.stringify(data)} />
    </Fragment>
  );
}
