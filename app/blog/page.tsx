import { Posts } from "@/components/Posts";
import { Search } from "@/components/Search";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <Search />
      <Posts />
    </>
  );
}
