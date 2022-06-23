import { useState } from 'react';

function useStaticInfiniteScroll(items, page = 1, perPage = 20) {
  const [allItems] = useState(items);
  const [currentPage, setCurrentPage] = useState(page);
  const [currentPerPage] = useState(perPage);
  const [currentItems, setItems] = useState(
    allItems.slice(0, currentPerPage * page)
  );
  const [hasMore, setHasMore] = useState(true);

  const maxPage = Math.ceil(allItems.length / perPage);

  const loadMore = (_page) => {
    if (hasMore) {
      setTimeout(() => {
        setCurrentPage(_page);
        setHasMore(_page <= maxPage);
        setItems(items.slice(0, currentPerPage * _page));
      }, 250);
    }
  };

  return { currentItems, currentPage, hasMore, loadMore };
}

export default useStaticInfiniteScroll;
