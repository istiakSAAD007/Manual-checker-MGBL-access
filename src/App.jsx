import { Route, Routes } from "react-router";
import DashboardLayout from "./Layout/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import HomePage from "./pages/HomePage";

import AddSignatory from "./components/AddSignatory";
import ConfirmTransacation from "./components/ConfirmTransacation";
import FileUploadConfirm from "./components/FileUploadConfirm";
import Beneficiary from "./pages/dashboard/Beneficiary/Beneficiary";
import MGtoMG from "./pages/dashboard/Beneficiary/MGtoMG";
import MGtoOther from "./pages/dashboard/Beneficiary/MGtoOther";
import BeftnMultiplePayment from "./pages/dashboard/Payment/BeftnMultiplePayment";
import BeftnSingplePayment from "./pages/dashboard/Payment/BeftnSingplePayment";
import MgblMultiplePayment from "./pages/dashboard/Payment/MgblMultiplePayment";
import MgblSinlgePayment from "./pages/dashboard/Payment/MgblSinlgePayment";
import Payment from "./pages/dashboard/Payment/Payment";
import RtgsSinglePayment from "./pages/dashboard/Payment/RtgsSinglePayment";
import ApprovePaymentHistory from "./pages/dashboard/Report/ApprovePaymentHistory";
import PaymentHisotry from "./pages/dashboard/Report/PaymentHisotry";
import TransactionReport from "./pages/dashboard/Report/TransactionReport";
import UnApprovedPaymentHistory from "./pages/dashboard/Report/UnApprovedPaymentHistory";
import UnAuthorizedPaymentHistory from "./pages/dashboard/Report/UnAuthorizedPaymentHistory";
import VirtualAccountPaymentHistory from "./pages/dashboard/Report/VirtualAccountPaymentHistory";
import VirtualAccountReport from "./pages/dashboard/Report/VirtualAccountReport";
import VirtualAccount from "./pages/dashboard/VirtualAccount";

function App() {
  return (
    <main className="min-h-screen">
      <section>
        <Routes>
          {/* login home page */}
          <Route path="/" element={<HomePage />} />

          {/* dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />

            {/* Payment Routes */}
            <Route path="payment">
              <Route index element={<Payment />} />{" "}
              {/* Optional main payment dashboard */}
              <Route path="rtgs" element={<RtgsSinglePayment />} />
              <Route path="beftn-single" element={<BeftnSingplePayment />} />
              <Route path="beftn-multiple" element={<BeftnMultiplePayment />} />
              <Route path="mgbl-single" element={<MgblSinlgePayment />} />
              <Route path="mgbl-multiple" element={<MgblMultiplePayment />} />
            </Route>

            {/* Beneficiary Management Routes */}
            <Route path="beneficiary">
              <Route index element={<Beneficiary />} />
              <Route path="mgbl" element={<MGtoMG />} />
              <Route path="other" element={<MGtoOther />} />
            </Route>

            {/* Virtual Account Routes */}
            <Route path="virtual-account" element={<VirtualAccount />} />

            {/* Report Routes */}
            <Route path="report">
              <Route index element={<VirtualAccount />} />
              <Route
                path="transaction-status"
                element={<TransactionReport />}
              />
              <Route path="va-history" element={<VirtualAccountReport />} />
              <Route
                path="va-payment-history"
                element={<VirtualAccountPaymentHistory />}
              />
              <Route path="payment-history" element={<PaymentHisotry />} />
              <Route
                path="unauthorized"
                element={<UnAuthorizedPaymentHistory />}
              />
              <Route path="unapproved" element={<UnApprovedPaymentHistory />} />
              <Route path="approved" element={<ApprovePaymentHistory />} />
            </Route>

            {/* Confirm Transaction */}
            <Route
              path="confirm-transaction"
              element={<ConfirmTransacation />}
            />

            {/* Add signatory */}
            <Route path="signatory" element={<AddSignatory />} />

            {/* File Upload Confirmaiton */}
            <Route
              path="file-upload-confirmation"
              element={<FileUploadConfirm />}
            />
          </Route>
        </Routes>
      </section>
    </main>
  );
}

export default App;
