import * as api from '../api';

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        console.log('before fetch.....');
        const { data } = await api.fetchPosts();
        console.log('fetched data....',data);
        dispatch({ type: 'FETCH_ALL', payload: data });
        console.log('after fetch.....');
    } catch (error) {
        console.log('FetcH error',error.message);
        
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        console.log('before create.....');

        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
        console.log('after create.....');

    } catch (error) {
        console.log('CreatE error',error);
    }
}