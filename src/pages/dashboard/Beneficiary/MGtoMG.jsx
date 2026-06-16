function MGtoMG() {
  return (
    <div>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10">
        Add Meghna Bank Beneficiary
      </h2>

      {/* Main Form Container */}
      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-gray-200 border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-zinc-600">
            Add Meghna Bank Beneficiary
          </span>
        </div>

        {/* Form Fields Body */}
        <div className="p-6 space-y-6">
          {/* Select to Remove Beneficiary */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="remove"
              className="text-sm font-medium text-zinc-500"
            >
              Select to Remove Beneficiary
            </label>
            <div className="relative">
              <select
                name="remove"
                id="remove"
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

          {/* Nick Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nickName"
              className="text-sm font-medium text-zinc-500"
            >
              Nick Name
            </label>
            <input
              type="text"
              id="nickName"
              placeholder="Nick Name"
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
        </div>
      </div>
    </div>
  );
}

export default MGtoMG;
