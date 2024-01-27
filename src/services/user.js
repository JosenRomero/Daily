
export const getUser = () => {

    return fetch(`${import.meta.env.VITE_APP_API_URL}/auth/login/success`, {
        method: "POST",
        credentials: "include",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json"
        }
    }).then(response => response.json() )

}

export const logout = () => {

    return fetch(`${import.meta.env.VITE_APP_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json"
        }
    }).then(response => response.json() )

}