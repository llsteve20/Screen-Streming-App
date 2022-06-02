import streams from "../APIs/streams";
import { SIGN_IN, SIGN_OUT } from "./types";

const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId

    };
};

const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

const createStreams = formValues => async dispatch => {
    streams.post('/streams', formValues);
};

export {signIn, signOut, createStreams};