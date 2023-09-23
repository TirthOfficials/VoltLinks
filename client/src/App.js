import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import MacBookPro142 from "./pages/MacBookPro142";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<MacBookPro142 />} />}
			{/* <Route path="/" element={<MacBookPro142 />} /> */}
			{/* {user && <Route path="/" exact element={<Main />} />} */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
