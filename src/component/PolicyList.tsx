import { usePolicies } from "../hooks/usePolicies";
import Pagination from "./Pagination";
import PolicyCard from "./PolicyCard";

const ITEMS_PER_PAGE = 3;

const PolicyList = () => {
    const { state, dispatch } = usePolicies();

    const activePolicies =
        state.policies.filter((policy: any) => policy.status === "Active")
            .sort((a: any, b: any) =>
                new Date(a.policyStart).getTime() -
                new Date(b.policyStart).getTime()
            );

    const totalPages = Math.ceil(activePolicies.length / ITEMS_PER_PAGE);
    const start = (state.page - 1) * ITEMS_PER_PAGE;
    const paginatedPolicies = activePolicies.slice(start, start + ITEMS_PER_PAGE);

    if (state.loading) {
        return (
            <div className="space-y-5">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#f8f8f8] rounded-3xl border border-[#ececec] p-6 md:p-8 shadow-sm animate-pulse"
                    >
                        <div className="h-6 w-48 rounded bg-[#e5e5e5] mb-6" />
                        <div className="space-y-4">
                            <div className="h-4 w-full rounded bg-[#e5e5e5]" />
                            <div className="h-4 w-3/4 rounded bg-[#e5e5e5]" />
                            <div className="h-4 w-5/6 rounded bg-[#e5e5e5]" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="space-y-5">
                {paginatedPolicies.map(
                    (policy: any) => (
                        <PolicyCard
                            key={policy.policyNumber} policy={policy} />
                    )
                )}
            </div>
            <Pagination
                currentPage={state.page}
                totalPages={totalPages}
                onPageChange={(page) =>
                    dispatch({
                        type: "SET_PAGE",
                        payload: page,
                    })
                }
            />
        </>
    );
};

export default PolicyList;