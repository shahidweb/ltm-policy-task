import { usePolicies } from "../hooks/usePolicies";
import PolicyCard from "./PolicyCard";

const ITEMS_PER_PAGE = 3;

const PolicyList = () => {
    const { state } = usePolicies();

    const activePolicies =
        state.policies.filter((policy: any) => policy.status === "Active")
            .sort((a: any, b: any) =>
                new Date(a.policyStart).getTime() -
                new Date(b.policyStart).getTime()
            );

    const start = (state.page - 1) * ITEMS_PER_PAGE;
    const paginatedPolicies = activePolicies.slice(start, start + ITEMS_PER_PAGE);

    return (
        <>
            <div className="space-y-5">
                {paginatedPolicies.map(
                    (policy: any) => (
                        <PolicyCard key={policy.policyNumber} policy={policy} />
                    )
                )}
            </div>
        </>
    );
};

export default PolicyList;