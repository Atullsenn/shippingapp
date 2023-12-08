import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import ManageCustomer from "./pages/ManageCustomer";
import ManageStaff from "./pages/ManageStaff";
import ManageSupplier from "./pages/ManageSupplier";
import Notification from "./pages/Notification";
import CustomClearaceOrder from "./pages/CustomClearaceOrder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermConditions from "./pages/TermConditions";

function App() {
  return (
    <Router>
   
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/manage-customer" element={<ManageCustomer/>}/>
          <Route path="/manage-staff" element={<ManageStaff/>}/>
          <Route path="/manage-supplier" element={<ManageSupplier/>}/>
          <Route path="/notifications" element={<Notification/>}/>
          <Route path="/custom-clearance-order" element={<CustomClearaceOrder/>}/>
          <Route path="/term-conditions" element={<TermConditions/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
