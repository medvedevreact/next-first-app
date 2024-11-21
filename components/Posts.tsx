"use client";
import { usePosts } from "@/store";
import Link from "next/link";
import React, { useEffect } from "react";

export type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export const Posts = () => {
  const { posts, isLoading, getAllPosts } = usePosts();

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
