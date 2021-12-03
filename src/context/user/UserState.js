import React, { useReducer } from "react";

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { initialState } from './initialState';

import { GET_DATA_ANIMAL, GET_DATA_USER, GET_DATA_PROVINCES } from "../types";

const UsertState = (props) => {

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const saveUSER = (data) => {

        try {
            dispatch({
                type: GET_DATA_USER,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }

    const savePET = (data) => {
        try {
            dispatch({
                type: GET_DATA_ANIMAL,
                payload: { ...data, data },
            });
        } catch (error) {
            console.log(error);
        }
    }

    const saveProvinces = (data) => {
        try {
            dispatch({
                type: GET_DATA_PROVINCES,
                payload: { ...data, data },
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider
            value={{
                user_data: state.user,
                pet_data: state.pet,
                provinces: state.provinces,
                saveUSER,
                savePET,
                saveProvinces
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UsertState;