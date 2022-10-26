import * as styles from "./pagination.css";

type PaginationProps = {
  page: {
    currentPage: number;
    lastPage: number;

    start: number;
    end: number;
    total: number;

    url: {
      prev: string;
      next: string;
      current: string;
    };
  };
};

export const Pagination = ({ page }: PaginationProps) => {
  return (
    <div class={styles.root}>
      <a href={page.url.prev}>Previous</a>
      <div>
        {page.start + 1} – {page.end + 1} of {page.total}
      </div>
      <a href={page.url.next}>Next</a>
    </div>
  );
};
