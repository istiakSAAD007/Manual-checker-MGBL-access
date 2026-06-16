import { useState } from "react";

function BeftnMultiplePayment() {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  return (
    <div>
      <h2 className="md:text-3xl lg:text-4xl font-semibold text-zinc-700 tracking-wide mb-10">
        Multiple Payment Upload - BEFTN
      </h2>

      {/* Main Form Container */}
      <div className="border border-zinc-200 rounded shadow-sm">
        <div className="bg-gray-200 border-b border-zinc-200 px-4 py-2.5">
          <span className="text-sm font-medium text-zinc-600 flex flex-col gap-1">
            <span>File upload for BEFTN Credit fund Transfer Notes:</span>
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
        <div className="p-6">
          {/* container */}
          <section className="flex flex-row gap-5">
            {/* left side */}
            <div className="flex-2 space-y-10">
              {/* select file */}
              <div className="space-y-4">
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
                      className="w-112.5 bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-600 appearance-none focus:outline-none focus:border-zinc-400"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Please select company account
                      </option>
                      <option value="">Value 1</option>
                      <option value="">Value 2</option>
                      <option value="">Value 3</option>
                    </select>
                    {/* dropdown */}
                    <div className="pointer-events-none absolute right-7 top-3 flex items-center px-3 text-zinc-500">
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

                {/* file input */}
                <p className="text-gray-500">
                  File input{" "}
                  <div className="inline-block">
                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer inline-flex items-center border border-gray-300 px-1 bg-gossamerparchment rounded shadow-sm"
                    >
                      <span className="text-black">Browse...</span>
                      <input
                        type="file"
                        className="hidden"
                        id="fileUpload"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>{" "}
                  no file selected
                </p>
                {file && (
                  <p className="text-black">
                    Selected:{" "}
                    <span className="text-emerald-700">{file?.name}</span>
                  </p>
                )}

                {/* Ignore first line */}
                <div className="flex flex-row items-center gap-3">
                  <input type="checkbox" />
                  <span>Ignore first line.</span>
                </div>
              </div>

              {/* file type */}
              <div className="flex flex-col gap-1">
                <h3 className="text-4xl text-gray-600">File Type</h3>
                <p className="text-gray-500">
                  MS-Excel (*.xls) or (.xlsx) | *.txt
                </p>
              </div>
            </div>

            {/* right side */}
            <div className="flex-2 space-y-20">
              <div className="space-y-6">
                <h3 className="text-4xl text-gray-600">File Specification</h3>
                <p className="text-gray-500 leading-5">
                  Reason | Sender Account No. | Receiving Bank Routing No. |
                  Account Type | Amount | Receiver ID
                </p>
              </div>

              <div className="flex flex-col space-y-5">
                <h3 className="text-4xl text-gray-600">Download Sample File</h3>
                <a href="#" className="text-blue-600">
                  Download sample
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BeftnMultiplePayment;
