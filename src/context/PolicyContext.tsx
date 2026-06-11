import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { getPolicies } from "../api/policyApi";
import type { Policy } from "../types/policy";

interface State {
    policies: Policy[];
    loading: boolean;
    page: number;
}

const initialState: State = {
    policies: [],
    loading: true,
    page: 1,
};

type Action =
    | { type: "SET_POLICIES"; payload: Policy[] }
    | { type: "SET_PAGE"; payload: number };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_POLICIES":
            return {
                ...state,
                policies: action.payload,
                loading: false,
            };
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};

export const PolicyContext = createContext<any>(null);

export const PolicyProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getPolicies().then((data: any) => {
            dispatch({
                type: "SET_POLICIES",
                payload: data,
            });
        });
    }, []);

    return (
        <PolicyContext.Provider value={{ state, dispatch }}> {children}</PolicyContext.Provider>
    );
};

