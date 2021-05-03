import './App.css';
import './dashboard/projects.css';
import Dashboard from './dashboard/dashboard';
import SideBar from './sidebar';
import Topbar from './topbar';
import Footer from './footer';

function App() {
  return (
    <>
    <div id="wrapper">
    <SideBar></SideBar>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
        <Dashboard></Dashboard>
      </div>
    </div>
    <Footer></Footer>
    </div>
    </div>
    </>
   
    
  );
}

export default App;
