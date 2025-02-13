import clsx from "clsx";
import s from "./SearchBar.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { SearchBarProps } from "./SearchBar.type";

export default function SearchBar({ onSearchChanged }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchChanged(value.trim());
    setValue("");
  };
  return (
    <header className={clsx(s.headerSearchBar)}>
      <form className={clsx(s.formSearchBar)} onSubmit={handleSubmit}>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
          className={clsx(s.inputSearchBar)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={clsx(s.btnSearchBar)} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
