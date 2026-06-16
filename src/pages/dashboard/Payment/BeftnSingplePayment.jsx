function BeftnSingplePayment() {
  return (
    <div>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10">
        Single Payment - BEFTN
      </h2>

      {/* Main Form Container */}
      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-gray-200 border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-zinc-600 flex flex-col gap-1">
            <span>Transaction Detail Note:</span>
            <span>
              Session 1: (12:01 AM to 01:30 PM) EFT initiated within this
              session will be credited on same working day after 02:00 PM
            </span>
            <span>
              Session 2: (02:01 AM to 11:30 PM) EFT initiated within this
              session will be credited on same working day after 10:00 AM
            </span>
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
        </div>
      </div>
    </div>
  );
}

export default BeftnSingplePayment;
