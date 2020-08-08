import { types } from "./types";

export const reducer = (state, action) => {
    switch (action.type) {
        case types.generaHorario:
            return { ...state, semanaDefault: action.payload };

        default:
            return state;
    }
};
