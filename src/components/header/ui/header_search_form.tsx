"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useLayoutEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

export const HeaderSearchFormFallback = (): JSX.Element => (
  <form className="header-search-form">
    <label className="search-field">
      <input id="searchForm" placeholder="Search..." type="search" />
      <MdSearch className="text-[1.5rem] md:text-[1.8rem]" />
    </label>
  </form>
);

const HeaderSearchForm = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const categoryParams = useSearchParams().get("keyword") ?? "";
  const [searchKey, setSearchKey] = useState("");

  useLayoutEffect((): void => {
    pathname === "/search" && setSearchKey(categoryParams);
  }, [pathname, categoryParams]);

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (searchKey === "" || searchKey === categoryParams) return;
    router.push(`/search?keyword=${searchKey}`);
  };

  return (
    <form className="header-search-form" onSubmit={onSubmit}>
      <label className="search-field">
        <input
          id="searchForm"
          placeholder="Search..."
          type="search"
          value={searchKey}
          onChange={(event): void => setSearchKey(event.target.value)}
        />
        <Link href={`/search?keyword=${searchKey}`}>
          <MdSearch className="text-[1.5rem] md:text-[1.8rem]" />
        </Link>
      </label>
    </form>
  );
};

export default HeaderSearchForm;
