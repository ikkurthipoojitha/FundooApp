import logo from './logo.svg';
import './App.css';
// import Signup from './components/signup/signup';
// import Signin from './components/signin1/signin1';
import Signin from './components/signin2/signin2.jsx';
import Signup from './components/signup2/signup2';
import Header from './components/Header/header';
import TakeNoteOne from './components/Takenote1/takenote1';
import TakeNoteTwo from './components/takenote2/takenotetwo';
import TakeNoteThree from './components/takenote4/takenote4';
import Dashboard from './components/dashboard/dashboard';
import RouterOne from './components/router/router';
import PrimarySearchAppBar from './components/headermui/headermui';
import store from './components/redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      < Provider store = {store} >
        <RouterOne  />
      </Provider>
       {/* <header/> */} 
      {/* <Signup/> */}
      {/* <Signin /> */}
      {/* <Header /> */}
      {/* <TakeNoteOne/> */}
      {/* <TakeNoteTwo/> */}
      {/* <TakeNoteThree /> */}
      {/* <Dashboard /> */}
      {/* <RouterOne /> */}
      {/* < PrimarySearchAppBar/> */}
    </div>
  );
}

export default App;
