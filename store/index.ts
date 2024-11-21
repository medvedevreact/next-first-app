import { Post } from "@/components/Posts";
import { create } from "zustand";

type UsePosts = {
  posts: Post[];
  isLoading: boolean;
  getAllPosts: () => void;
  getFilteredPosts: (searchValue: string) => void;
};

export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  isLoading: true,
  getAllPosts: async () => {
    const response = await fetch("http://localhost:3000/api/posts");
    const posts = await response.json();
    set({ posts, isLoading: false });
  },
  getFilteredPosts: async (searchValue: string) => {
    const response = await fetch(
      `http://localhost:3000/api/posts?q=${searchValue}`
    );
    const posts = await response.json();
    set({ posts, isLoading: false });
  },
}));
