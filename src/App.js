
import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';
import ProductEdit from './components/ProductEdit';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div id="page-top">
      <div id="wrapper">
      
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
            <Topbar/>
              <Switch>
              <div className="container-fluid"> 
              <Route exact path="/" component={ContentArea}>
                 <ContentArea/>
              </Route>
              <Route exact path="/userlist">
                 <UserList/>
              </Route>
              <Route exact path="/usercreate">
                 <UserCreate/>
              </Route>
              <Route exact={true} path="/useredit/:id" component={UserEdit}/>
              <Route exact={true} path="/productlist" component={ProductList}/>
              <Route exact={true} path="/productedit/:id" component={ProductEdit}/>
              <Route exact={true} path="/productcreate" component={ProductCreate}/>                 
              
              </div>
              </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
