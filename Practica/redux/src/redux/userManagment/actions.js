export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user
})

export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    payload: user
})

export const deleteUser = (userID) => ({
    type: 'DELETE_USER',
    payload: userID
})