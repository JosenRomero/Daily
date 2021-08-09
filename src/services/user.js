
export const getUser = () => {

    return fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            "Access-Control-Allow-Credentials": true
        }
    }).then(response => response.json() )

}