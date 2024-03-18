"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useLayoutEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import "./css.css";

const HeaderSearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchKey, setSearchKey] = useState("");

  useLayoutEffect(() => {
    pathname === "/search" &&
      setSearchKey(searchParams.get("keyword") ? (searchParams.get("keyword") as string) : "");
  }, [pathname, searchParams]);

  const onSearch = () => {
    if (searchKey === "") return;
    router.push(`/search?keyword=${searchKey}`);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className="header-search-form" onSubmit={onSubmit}>
      <label className="search-field">
        <input
          id="searchForm"
          placeholder="Search..."
          type="search"
          value={searchKey as string}
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <MdSearch className="text-[1.5rem] md:text-[1.8rem]" onClick={onSearch} />
      </label>
    </form>
  );
};

export default HeaderSearchForm;
