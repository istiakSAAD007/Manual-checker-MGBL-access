import { Pencil, Plus } from "lucide-react";

function FileUploadConfirm() {
  return (
    <>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10">
        File Upload Confirmation
      </h2>

      {/* Table Container */}
      <div className="space-y-6">
        {/* File Details */}
        <div className="border border-zinc-200 rounded shadow-sm">
          <div className="bg-auntviolet border-b border-fuchsia-200 px-4 py-2.5">
            <span className="text-sm font-normal text-gossamerparchment">
              File Detail
            </span>
          </div>

          {/* Table Body */}
          <div className="py-2 px-3 space-y-6">
            <div className="overflow-x-auto bg-white">
              <table className="min-w-full text-left text-xs whitespace-nowrap">
                <thead className="border-b-2 border-gray-300 border-t">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      File Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Total BEFTN Transaction
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      StockTotal BEFTN Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Total BEFTN Charge Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Total Transaction Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Amount In Words
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-300 bg-gray-200">
                    <td
                      scope="row"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      BEFTN Bulk Payment.xls
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">2</td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      11,000.00
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">0.00</td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      11,000.00
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      Eleven Thousand Taka
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* button container */}
          <div className="px-3 pt-3 pb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="px-5 py-2 bg-blue-500 text-sm text-white rounded-xs hover:bg-blue-400 transition-colors cursor-pointer">
                Confirm
              </button>
              <button className="px-5 py-2 bg-blue-500 text-sm text-white rounded-xs flex items-center gap-1 hover:bg-blue-400 transition-colors cursor-pointer">
                <Pencil size={14} /> <span>Cancel</span>
              </button>
            </div>
            <p className="text-red-500 font-semibold">
              Company Account Balance: <span>18561530.1</span>
            </p>
            <p className="text-red-500 font-semibold">Total amount: 11000.0</p>
          </div>
        </div>

        {/* Company Account */}
        <div className="border border-zinc-200 rounded shadow-sm">
          <div className="bg-auntviolet border-b border-fuchsia-200 px-4 py-2.5">
            <span className="text-sm font-normal text-gossamerparchment">
              Company Account
            </span>
          </div>

          {/* Table Body */}
          <div className="py-2 px-3 space-y-6">
            <div className="overflow-x-auto bg-white">
              <table className="min-w-full text-left text-xs whitespace-nowrap">
                <tbody>
                  <tr className="border-b  border-t border-gray-300 bg-gray-200">
                    <td
                      scope="row"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      110111100001138
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      United Savings
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Transaction Detail */}
        <div className="border border-zinc-200 rounded shadow-sm">
          <div className="bg-auntviolet border-b border-fuchsia-200 px-4 py-2.5">
            <span className="text-sm font-normal text-gossamerparchment">
              Transaction Detail
            </span>
          </div>

          {/* Form Fields Body */}
          <div className="py-2 px-3 space-y-6">
            <div className="overflow-x-auto bg-white">
              <table className="min-w-full text-left text-xs whitespace-nowrap">
                <thead className="border-b-2 border-gray-300 border-t">
                  <tr>
                    <th scope="col" className="border-x border-gray-300"></th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      S/L
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Beneficiary Account
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Beneficiary Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Amount In Words
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Payment Type
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-300 bg-gray-200">
                    <td
                      scope="row"
                      className="px-2 border-x border-gray-300 text-center align-middle"
                    >
                      <button className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 bg-white p-[1px] hover:scale-105 transition-transform cursor-pointer">
                        <div className="flex items-center justify-center w-full h-full rounded-full bg-green-600 text-white">
                          <Plus size={12} strokeWidth={3} />
                        </div>
                      </button>
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      1
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      2251401976001
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-2 border-x border-gray-300"
                    >
                      Zillur Rahman
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      6000.00
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      Six Thousand Taka
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      BEFTN
                    </td>
                    <td className="px-4 py-2 border-x border-gray-300">
                      UNAUTHORIZED
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUploadConfirm;
