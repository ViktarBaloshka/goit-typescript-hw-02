import clsx from "clsx";
import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.typr";

export default function LoadMoreBtn({ handleChangePage }: LoadMoreBtnProps) {
  return (
    <button onClick={handleChangePage} className={clsx(s.loadMoreBtn)}>
      Load more
    </button>
  );
}
