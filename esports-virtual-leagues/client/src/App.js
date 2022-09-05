import React from 'react';
// import {
// 	ApolloClient,
// 	InMemoryCache,
// 	ApolloProvider,
// 	createHttpLink,
// } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './App.css';

import Home from "./pages/Home";
import Navbar from './components/Navbar';

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
// 	link: authLink.concat(httpLink),
// 	cache: new InMemoryCache(),
// });


function App() {
  return (
    // <ApolloProvider>
			<Router>
		 		<div>
		 			<Navbar />
		 		</div>
				<Routes>
    <Route path="/" element={<Home />} />
		 		</Routes>
			</Router>
		// </ApolloProvider>
  );
}

export default App;


// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>