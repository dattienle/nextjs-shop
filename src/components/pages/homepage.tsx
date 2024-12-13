"use client";
import React from "react";

export default function Homepage(props: { data: any }) {
  console.log(JSON.parse(props.data));
  return <div>Home Page</div>;
}
