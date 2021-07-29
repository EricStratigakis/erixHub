import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import { useState, useEffect, useRef, useCallback } from "react";

const useInfiniteScroll = (data, pageSize) => {
  const [elements, setElements] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setHasMore(data.length > pageNumber * pageSize);
    setElements(data.slice(0, hasMore ? pageNumber * pageSize : data.length));
  }, [pageNumber]);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return { elements, hasMore, lastElementRef };
};

export default useInfiniteScroll;
