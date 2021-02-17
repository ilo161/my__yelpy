export const fetchSearchResults = query => {
    return $.ajax({
        url:`/api/businesses/search`,
        method: "GET",
        data: {search: query.searchQuery,
                filters: query.filters}
    });
}