import { Check, SquarePen, Pencil } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../../../components/reusable/Button";
import Table from "../../../components/reusable/Table";
import { useStateContext } from "../../../context/useStateContext";
import useFetch from "../../../hooks/useFetch";

function PaymentAppr() {
  const navigate = useNavigate();
  const { data: tableData, loading, error } = useFetch("data4.json");
  const { pendingTran } = useStateContext();
  const truthVal = false;

  const columns = [
    {
      header: "Transaction Date",
      accessor: "TransactionDate",
    },
    {
      header: "Company Account",
      accessor: "CompanyAccount",
    },
    {
      header: "Total Transaction",
      accessor: "TotalTransaction",
    },
    {
      header: "Total Amount",
      accessor: "TotalAmount",
      render: (value) =>
        typeof value === "number"
          ? value.toLocaleString("en-US", { minimumFractionDigits: 2 })
          : value,
    },
    {
      header: "Ref. Num",
      accessor: "RefNum",
    },
    {
      header: "Payment Type",
      accessor: "PaymentType",
    },
  ];

  const handleReject = (row) => alert(`Rejecting: ${row.TransactionRef}`);
  const handleDetail = (row) =>
    alert(`Viewing details for: ${row.TransactionRef}`);

  if (loading)
    return (
      <div className="p-6 text-gray-500 font-medium animate-pulse">
        Loading transaction dashboard...
      </div>
    );
  if (error)
    return <div className="p-6 text-red-500">Error loading data: {error}</div>;

  return (
    <div className="w-full space-y-6">
      <h2 className="text-3xl font-normal text-gray-700 tracking-tight">
        Un-Approved Transactions
      </h2>

      {truthVal && (
        <div className="p-3 bg-green-50 rounded-md border border-green-200">
          <p className="text-sm text-green-700 flex items-center gap-2">
            <Check size={16} /> Transaction Authorize successfully
          </p>
        </div>
      )}

      <Table
        columns={columns}
        data={tableData}
        rowKey="unconfirmedTabledata"
        renderActions={(row) => (
          // flex flex-wrap gap-2 max-w-[240px]
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-46">
            {pendingTran ? (
              <Button
                className="px-3 py-2.5 col-span-2"
                variant="danger"
                label="Update Assign Signatory"
                icon={<Pencil size={12} />}
                onClick={() => navigate("/dashboard/update-signatory")}
              />
            ) : (
              <Button
                className="px-3 py-2.5"
                variant="success"
                label="Confirm"
                icon={<SquarePen size={12} />}
                onClick={() => navigate("/dashboard/signatory")}
              />
            )}

            <Button
              className="px-3 py-2.5"
              variant="success"
              label="Reject"
              icon={<SquarePen size={12} />}
              onClick={() => handleReject(row)}
            />
            <Button
              className="px-3 py-2.5"
              variant="success"
              label="Detail"
              icon={<SquarePen size={12} />}
              onClick={() => handleDetail(row)}
            />
          </div>
        )}
      />
    </div>
  );
}

export default PaymentAppr;
