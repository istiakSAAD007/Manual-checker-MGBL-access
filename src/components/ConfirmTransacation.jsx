import { useState } from "react";
import { useNavigate } from "react-router";
import { Check } from "lucide-react";

function ConfirmTransacation() {
  const [confirmTransaction, setConfirmTransaction] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10 flex items-end justify-between">
        <span>Transaction Confirmation</span>
        {confirmTransaction && (
          <span className="text-green-600 text-xs flex items-center gap-1">
            <Check size={10} /> Transaction Confirmed Successfully.
          </span>
        )}
      </h2>

      {/* Main Form Container */}
      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-red-500/80 rounded-t border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-gossamerparchment">
            Transaction Detail
          </span>
        </div>

        {/* Form Fields Body */}
        <div className="p-6 space-y-6">
          <p>Company Account: United Savings [110111100001138]</p>
          <p>Beneficiary: NZaman</p>
          <p>Beneficiary Account: NZaman company [3101010102001]</p>
          <p>Bank Information: Nzaman company [3101010102001]</p>
          <p>Mobile: +8801#########</p>
          <p>Email: demo@gmail.com</p>
          <p>Transaction Amount: 100,101</p>
          <p>Amount in words: One hundred Thousand One hundred One Taka</p>
          <p>Remarks: Test</p>
          <p>Reason: Advance</p>
          <p>Transaction By: RTGS</p>

          {/* confirm button */}
          <div>
            <button
              className="px-4.5 py-2.5 border border-gray-300 bg-gossamerparchment shadow-lg hover:shadow-xl    transition-colors cursor-pointer"
              onClick={() => setConfirmTransaction(true)}
            >
              {confirmTransaction ? (
                <span onClick={() => navigate("/dashboard")}>
                  Assign Signatory
                </span>
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTransacation;
