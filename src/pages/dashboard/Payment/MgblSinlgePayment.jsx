import Button from "../../../components/reusable/Button";

function MgblSinlgePayment() {
  return (
    <div>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10">
        Transaction Details
      </h2>

      {/* Main Form Container */}
      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-gray-200 border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-zinc-600">
            Transaction Detail (Notes: RTGS available from 10:00 AM to 03:30 PM
            for instant transfer 100,000 or more within working day.)
          </span>
        </div>

        {/* Form Fields Body */}
        <div className="p-6 space-y-6">
          {/* Company account */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="savings"
              className="text-sm font-medium text-zinc-500"
            >
              Company Account
            </label>
            <div className="relative">
              <select
                name="savings"
                id="savings"
                className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 appearance-none focus:outline-none focus:border-zinc-400"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  United Savings [AC: 110111100001136]
                </option>
                <option value="">Value 1</option>
                <option value="">Value 2</option>
                <option value="">Value 3</option>
              </select>
              {/* dropdown */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Beneficiary */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="beneficiary"
              className="text-sm font-medium text-zinc-500"
            >
              Beneficiary
            </label>
            <div className="relative">
              <select
                name="beneficiary"
                id="beneficiary"
                className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 appearance-none focus:outline-none focus:border-zinc-400"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Please select beneficiary
                </option>
                <option value="">Value 1</option>
                <option value="">Value 2</option>
                <option value="">Value 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Account Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="accountName"
              className="text-sm font-medium text-zinc-500"
            >
              Account Name
            </label>
            <input
              type="text"
              id="accountName"
              placeholder="Account Name"
              className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
          </div>

          {/* Account Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="accountNumber"
              className="text-sm font-medium text-zinc-500"
            >
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              placeholder="Account Number"
              className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="mobile"
              className="text-sm font-medium text-zinc-500"
            >
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="Mobile Number"
              className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-500"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-zinc-500"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              placeholder="Amount"
              className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="reason"
              className="text-sm font-medium text-zinc-500"
            >
              Reason
            </label>
            <input
              type="text"
              id="reason"
              placeholder="What is the reason?"
              className="w-full border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="remarks"
              className="text-sm font-medium text-zinc-500"
            >
              Remarks
            </label>
            <textarea
              name="remarks"
              id="remarks"
              cols="30"
              rows="5"
              placeholder="What is the reason?"
              className="text-sm text-zinc-600 border border-zinc-300 rounded p-3 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            ></textarea>
          </div>

          <div>
            <Button
              className="px-4 py-2"
              variant="primary"
              label="Next >>"
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MgblSinlgePayment;
