import useFetch from "../hooks/useFetch";
import { signatoryTable } from "../assets/VariableAssist";
import Button from "./reusable/Button";

function AddSignatory() {
  const { data: userInfo, loading, error } = useFetch("data2.json");

  if (loading)
    return (
      <div className="p-6 text-gray-500 font-medium animate-pulse">
        Loading transaction dashboard...
      </div>
    );
  if (error)
    return <div className="p-6 text-red-500">Error loading data: {error}</div>;

  return (
    <div>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10">
        Single Payment - RTGS
      </h2>

      {/* Main Form Container */}
      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-gray-200 border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-zinc-600">
            Transaction Detail
          </span>
        </div>

        {/* Form Fields Body */}
        <section className="p-6 space-y-6">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                <tr>
                  <td className="text-left px-5 py-3 bg-blue-200 font-medium border-x border-gray-200 text-gray-700">
                    Summary
                  </td>
                  <td className="text-left px-5 py-3 bg-blue-200 font-medium"></td>
                </tr>

                {signatoryTable.map((item, index) => (
                  <tr
                    className={`text-sm ${index % 2 == !0 ? "bg-gray-200" : ""} border-x border-gray-200 text-gray-600`}
                  >
                    <td className="text-left px-5 py-3 w-1/2 border-r border-gray-200">
                      {item.head}
                    </td>
                    <td className="text-left px-5 py-3 w-1/2">
                      {userInfo[index] ? userInfo[index].info : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="border border-zinc-200 rounded-t shadow-sm mx-7 mb-5">
          <div className="bg-fuchsia-800 border-b border-zinc-200 px-4 py-2.5">
            <span className="text-sm font-medium text-white">Signatory</span>
          </div>

          {/*signatory  */}
          <section className="p-6 space-y-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border border-gray-200 text-gray-600 text-sm">
                    <td className="text-left px-5 py-3 w-1/2 border-r border-gray-200">
                      S/L
                    </td>
                    <td className="text-left px-5 py-3 w-1/2">Name</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border border-gray-200 text-gray-600 text-sm">
                    <td className="text-left px-5 py-3 w-1/2 border-r border-gray-200">
                      1
                    </td>
                    <td className="text-left px-5 py-3 w-1/2">
                      Porimol Chandra Sharkar
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* button container */}
        <div className="px-6 mb-5 flex items-center gap-2">
          <Button
            className="px-3.5 py-2.5"
            variant="primary"
            label="Confirm"
            onClick={() => {}}
          />
          <Button
            className="px-3.5 py-2.5"
            variant="danger"
            label="Back"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default AddSignatory;
