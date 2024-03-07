import { useState } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import './App.css'

// For some reason, React didn't render when I use Context Provider
// and it didn't show any errors on the console which was really confusing.
// So I had to use global state manually by passing it down level by level,
// but I will come back to refactor the code to useContext API when I figure out the problem
function App() {
	const [productQuantity, setProductQuantity] = useState(0);
	const [cartProductQuantity, setCartProductQuantity] = useState(0);
	return (
		<>
			<Navbar
				cartProductQuantity={cartProductQuantity}
				setCartProductQuantity={setCartProductQuantity}
			/>
			<Product
				productQuantity={productQuantity}
				setProductQuantity={setProductQuantity}
				setCartProductQuantity={setCartProductQuantity}
			/>
		</>
	);
}

export default App;