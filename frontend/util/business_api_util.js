
export const fetchBusinesses = () => {
    return $.ajax({
        url:`/api/businesses`,
        method: "GET"
    });
}

export const fetchBusiness = (businessId) => {
    return $.ajax({
        url:`/api/businesses/${businessId}`,
        method: "GET"
    });
}

export const createBusiness = (business) => {

    return $.ajax({
        url:`/api/businesses`,
        method: "POST",
        data:{business},
        contentType: "application/json",
    });
}

export const updateBusiness = (business) => {
    return $.ajax({
        url:`/api/businesses/${business.id}`,
        method: "PATCH",
        data: {business},
        contentType: "application/json"
    });
}

export const deleteBusiness = (businessId) => {
    return $.ajax({
        url:`/api/businesses/${businessId}`,
        method: "DELETE"
    })
}

