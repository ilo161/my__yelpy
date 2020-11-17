

export const loginSession = (session) => {
    return $.ajax({
        url:`/api/session`,
        method: "POST",
        data:{session},
        contentType: "application/json"
    });
}

export const logoutSession = (sessionId) => {
    return $.ajax({
        url:`/api/businesses/${sessionId}`,
        method: "DELETE"
    })
}

