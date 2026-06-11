import PolicyList from "../component/PolicyList";

const MyPolicies = () => {
    return (
        <div className="max-w-5xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-8" >
                My Policies
            </h1>
            <PolicyList />
        </div>
    );
};

export default MyPolicies;