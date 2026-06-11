import policies from "../data/policies.json";

export const getPolicies = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(policies);
        }, 500);
    });
};