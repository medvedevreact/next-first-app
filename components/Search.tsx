"use client";

import { usePosts } from "@/store";
import React, { useState } from "react";

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getFilteredPosts } = usePosts();

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getFilteredPosts(searchValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={searchValue} onChange={onChangeSearchValue} type="search" />
      <button type="submit">Search</button>
    </form>
  );
};
