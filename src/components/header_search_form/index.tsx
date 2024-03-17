"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { MdSearch } from "react-icons/md";
import "./css.css";

const HeaderSearchForm = () => {
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter();

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
          value={searchKey}
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <MdSearch className="text-[1.5rem] md:text-[1.8rem]" onClick={onSearch} />
      </label>
    </form>
  );
};

export default HeaderSearchForm;
