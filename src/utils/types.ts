
export type Articles = {
    source:any,
    author:string,
    title:string,
    description:string,
    url:string,
    urlToImage:string,
    publishedAt?:string,
    content:string
}

export type EverythingResponse = {
    status:string,
    totalResults:number,
    articles:Articles[]
}