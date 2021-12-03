import { GET_DATA_USER, GET_DATA_ANIMAL, GET_DATA_PROVINCES } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_DATA_USER:
            return {
                ...state,
                user: payload,
            }
        case GET_DATA_ANIMAL:
            return {
                ...state,
                pet: payload
            }
        case GET_DATA_PROVINCES:
            return {
                ...state,
                provinces: payload
            }
        default: return state;
    }
}