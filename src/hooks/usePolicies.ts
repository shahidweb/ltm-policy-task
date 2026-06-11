import { useContext } from "react";
import { PolicyContext } from "../context/PolicyContext";

export const usePolicies = () => {
    return useContext(PolicyContext);
};