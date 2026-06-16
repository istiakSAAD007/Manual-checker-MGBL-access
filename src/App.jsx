import { Route, Routes } from "react-router";
import DashboardLayout from "./Layout/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import HomePage from "./pages/HomePage";

import AddSignatory from "./components/AddSignatory";
import ChequeConf from "./pages/dashboard/Payment/ChequeConf";
import PaymentAppr from "./pages/dashboard/Payment/PaymentAppr";
import PaymentConf from "./pages/dashboard/Payment/PaymentConf";
import ApprovePaymentHistory from "./pages/dashboard/Report/ApprovePaymentHistory";
import PaymentHisotry from "./pages/dashboard/Report/PaymentHisotry";
import TransactionReport from "./pages/dashboard/Report/TransactionReport";
import UnApprovedPaymentHistory from "./pages/dashboard/Report/UnApprovedPaymentHistory";
import UnAuthorizedPaymentHistory from "./pages/dashboard/Report/UnAuthorizedPaymentHistory";
import VirtualAccountPaymentHistory from "./pages/dashboard/Report/VirtualAccountPaymentHistory";
import VirtualAccountReport from "./pages/dashboard/Report/VirtualAccountReport";
import VirtualAccount from "./pages/dashboard/VirtualAccount/VirtualAccount";
import Summary from "./pages/users/Summary";

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
              <Route path="unconfirmed-payment" element={<PaymentConf />} />
              <Route path="unconfirmed-cheque" element={<ChequeConf />} />
              <Route path="unapproved-payment" element={<PaymentAppr />} />
            </Route>

            {/* Virtual Account Routes */}
            <Route path="virtual-account" element={<VirtualAccount />} />

            {/* Payment Routes */}
            <Route path="users">
              <Route path="summary" element={<Summary />} />
            </Route>

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
            {/* <Route
              path="confirm-transaction"
              element={<ConfirmTransacation />}
            /> */}

            {/* Add signatory */}
            <Route path="signatory" element={<AddSignatory />} />

            {/* File Upload Confirmaiton */}
            {/* <Route
              path="file-upload-confirmation"
              element={<FileUploadConfirm />}
            /> */}
          </Route>
        </Routes>
      </section>
    </main>
  );
}

export default App;
