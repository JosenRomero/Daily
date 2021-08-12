
export const getAllTasks = (userId) => {

    return fetch(`http://localhost:3001/api/task/all/userId/${userId}`)
        .then(res => res.json())

}

export const addTask = (state) => {

    return fetch('http://localhost:3001/api/task', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            "Accept": "application/json",
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json())

}

export const updateTask = (state) => {

    return fetch(`http://localhost:3001/api/task/${state._id}`, {
        method: 'PUT',
        body: JSON.stringify(state),
        headers: {
            "Accept": "application/json",
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json())

}

export const deleteTask = (id) => {

    return fetch(`http://localhost:3001/api/task/${id}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json())

}

export const getOneTask = (id) => {

    return fetch(`http://localhost:3001/api/task/${id}`)
        .then(res => res.json())

}

export const deleteAllTasks = (userId) => {

    return fetch(`http://localhost:3001/api/task/all/userId/${userId}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json())

}