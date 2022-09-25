import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";
import Register from "./Components/Register";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./Components/Login";
function App() {
  return (
    <div className='App'>
      {/* <Register />
      <Login />  */}
       {/* <Nav /> */}
      {/* <Cart /> */}
      {/* <HomeScreen /> */}
       
   
       <Routes>
          <Route path="/" element={<HomeScreen /> }></Route>
           {/* <Route path="/login" element={<Login/>}></Route> */}
           <Route path="/register" element={<Register/>}></Route>

          <Route></Route>
       </Routes>
  

    </div>
  );
}

export default App;
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Pages/Login/Login";
// import HomeScreen from "./screens/HomeScreen";
// import NoMatch from "./Pages/404Page/404Page";
// import { connect } from "react-redux";
// const App = ({ isLogin }) => {
//   return (
//     <div>
//       <Routes>
//         {isLogin ? (
//           <Route path="/" component={() => <HomeScreen />} />
//         ) : (
//           <Route exact path="/" component={() => <Login />} />
//         )}
//         <Route path="*" component={NoMatch} />
//       </Routes>
//     </div>
//   );
// };
// const mapStateToProps = ({ login: { isLogin } }) => ({
//   isLogin
// });
// export default connect(mapStateToProps)(App);
