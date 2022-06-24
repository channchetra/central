import { useState } from 'react';

function useStaticInfiniteScroll(items, perPage = 20) {
  const [allItems] = useState(items);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPerPage] = useState(perPage);
  const [currentItems, setItems] = useState(
    allItems.slice(0, currentPerPage * currentPage)
  );
  const [hasMore, setHasMore] = useState(true);

  const maxPage = Math.ceil(allItems.length / perPage);

  const loadMore = (_page) => {
    if (hasMore) {
      setTimeout(() => {
        setCurrentPage(_page);
        setHasMore(_page <= maxPage);
        setItems(allItems.slice(0, currentPerPage * _page));
      }, 250);
    }
  };

  return {
    items: currentItems,
    page: currentPage,
    perPage: currentPerPage,
    hasMore,
    loadMore,
  };
}

export default useStaticInfiniteScroll;
