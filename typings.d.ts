type Category =
    "general" |
    "business" |
    "entertainment" |
    "health" |
    "science" |
    "sports" |
    "technology";

type Article = {
    author: string | null;
    category: string | null;
    country: string | null;
    description: string | null;
    image: string | null;
    language: string | null;
    published_at: string | null;
    source: string | null;
    title: string | null;
    url: string | null;
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