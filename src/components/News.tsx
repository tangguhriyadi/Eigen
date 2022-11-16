import React, {useMemo, useCallback} from "react";
import { useGetDataQuery } from "../services/everythingApi";

type Props = {
  keyword: string;
};

const News: React.FC<Props> = ({ keyword }) => {
  const { data: data } = useGetDataQuery(keyword, { skip: !keyword });
  console.log(data);
  const status = useMemo(() => {
    if(!data) return null
    if(data && data.status && data.status.length > 0){
        return data.status
    }
  },[data])

  console.log(status)

  const renderer = useCallback(() => {
    if(status === 'ok') {
        return (
            <h2>ketemu</h2>
        )
    } else return (
        <h2>keyword {keyword} not found !</h2>
    )
  },[status, keyword])
  return (
    <div>
      {renderer()}
    </div>
  );
};

export default News;
