export const fetchSearchResults = search => {
    return $.ajax({
        url:`/api/businesses/search`,
        method: "GET",
        data: {search}
    });
}