
export const fetchUsers = () => {
    return $.ajax({
        url:`/api/users`,
        method: "GET"
    });
}

export const fetchUser = (userId) => {
    return $.ajax({
        url:`/api/users/${userId}`,
        method: "GET",
    });
}

export const signupUser = (user) => {
    return $.ajax({
        url:`/api/users`,
        method: "POST",
        data: {user},
        contentType: "application/json"
        // success: yes => {
        //     debugger
        //     console.log(yes)
        // },
        // error: no => {
        //     debugger
        //     console.log(no)
        // }
    });
}

export const updateUser = (user) => {
    return $.ajax({
        url:`/api/users`,
        method: "PATCH",
        data: {user},
        contentType: "application/json"
    });
}

export const deleteUser = (userId) => {
    return $.ajax({
        url:`/api/users/${userId}`,
        method: "DELETE"
    })
}

