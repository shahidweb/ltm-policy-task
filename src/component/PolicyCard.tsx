import { format } from "date-fns";
import { FiExternalLink } from "react-icons/fi";
import type { Policy } from "../types/policy";

interface Props {
  policy: Policy;
}

export default function PolicyCard({ policy }: Props) {
  return (
    <div className="bg-[#f8f8f8] rounded-3xl p-6 md:p-8 shadow-sm border border-[#ececec]">
      <div className="hidden md:flex justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-[20px] font-bold text-[#2450d3] mb-8">
            <span>Policy number:</span>
            <span className="text-[#222] font-normal ml-2"> {policy.policyNumber} </span>
          </h2>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
            <div className="space-y-4">
              <div>
                <span className="font-bold">Destination:</span>{" "}
                {policy.destinations[0]?.name}
              </div>

              {policy.type === "Annual" ? (
                <>
                  <div>
                    <span className="font-bold"> Policy start date: </span>
                    <span>{format(new Date(policy.policyStart), "dd MMM yyyy")}</span>
                  </div>

                  <div>
                    <span className="font-bold"> Maximum trip duration: </span>
                    <span> Up to {policy.maxTripDuration} days</span>
                  </div>
                </>
              ) : (
                <div>
                  <span className="font-bold"> Travel date: </span>
                  <span>{format(new Date(policy.policyStart), "dd MMM yyyy")} - {format(new Date(policy.policyEnd), "dd MMM yyyy")}</span>
                </div>
              )}
            </div>

            <div className="w-px bg-[#e5e5e5]" />
            <div className="space-y-4">
              <div>
                <span className="font-bold">Plan:</span>
                <span>{policy.planName}</span>
              </div>

              <div>
                <span className="font-bold">Excess:</span> $
                <span>{policy.excess}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-8 mt-8">
            <a href="#" className="flex items-center gap-1 text-sm underline">
              <FiExternalLink size={14} />
              View PDS
            </a>

            <a href="#" className="flex items-center gap-1 text-sm underline">
              <FiExternalLink size={14} />
              Certificate of Insurance
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 min-w-[165px]">
          <button className="h-12 rounded-full bg-[#f8e08d] border-2 border-[#2d58dc] text-[#2d58dc] font-semibold">
            Make a claim
          </button>

          <button className="h-12 rounded-full border-2 border-[#2d58dc] text-[#2d58dc] font-semibold bg-white">
            Manage my policy
          </button>
        </div>
      </div>
    </div>
  );
}