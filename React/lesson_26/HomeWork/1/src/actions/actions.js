﻿export const createTask = (task) => {
    return {
        type: 'CREATE_TASK', 
        payload: task
    }
} 

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK', 
        payload: id
    }
} 
