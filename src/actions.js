
export const ADD = 'ADD';
export const INCREMENT = 'INCREMENT';

export const addMessage = (author,message) => {
    return {
        type:ADD,
        author:author,
        message:message
    }
};

export const addLikes = () => {
    return {
        type: INCREMENT
    }
}

