
export const getUser = () => {

    return fetch(`${import.meta.env.VITE_APP_API_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            "Access-Control-Allow-Credentials": true
        }
    }).then(response => response.json() )

}