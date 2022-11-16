import React, { useMemo, useCallback } from "react";
import { useGetDataQuery } from "../services/everythingApi";
import { NewsItem } from "./NewsItem";

type Props = {
  keyword: string;
};

const News: React.FC<Props> = ({ keyword }) => {
  const { data: data, isFetching } = useGetDataQuery(keyword, {
    skip: !keyword,
  });

  const status = useMemo(() => {
    if (!data) return null;
    if (data && data.status && data.status.length > 0) {
      return data.status;
    }
  }, [data]);

  const renderer = useCallback(() => {
    if (!status) {
      return <h2>enter the keyword</h2>;
    } else if (status && status !== "ok") {
      return <h2>keyword {keyword} not found !</h2>;
    } else {
      return <NewsItem keyword={keyword} isLoading={isFetching} data={data} />;
    }
  }, [status, keyword, isFetching, data]);

  return <div>{renderer()}</div>;
};

export default News;
