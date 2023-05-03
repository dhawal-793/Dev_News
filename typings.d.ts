type Category =
    "general" |
    "buisness" |
    "entertainment" |
    "health" |
    "science" |
    "sports" |
    "technology";

type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
}

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[];
}