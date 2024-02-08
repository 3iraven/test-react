
import DBMui from './component/DBMui';
import AssetPage from './component/asset/AssetPage';
import Employee from './component/employee/Employee';
import EditEmployee from './component/employee/EmployeeEdit';
import LeasePage from './component/lease/LeasePage';
import VendorPage from './component/vendor/VendorPage';

function App() {
  return (
    <div className="App">
    <LeasePage/>
    <Employee/>
    <VendorPage/>
    <AssetPage/>
    </div>
  );
}

export default App;
