"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  navItems: NavItem[];
};

export const Navigation: React.FC<Props> = ({ navItems }) => {
  const pathname = usePathname();
  const session = useSession();
  console.log(session);
  return (
    <nav>
      <ul>
        {navItems.map((navItem: NavItem) => (
          <li key={navItem.href}>
            <Link
              href={`${navItem.href}`}
              className={`${navItem.href === pathname ? "active" : ""}`}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
        {session?.data && <Link href={"/profile"}>Profile</Link>}
        {session?.data ? (
          <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
            Sign Out
          </Link>
        ) : (
          <Link href={"/api/auth/signin"}>Sign In</Link>
        )}
      </ul>
    </nav>
  );
};
