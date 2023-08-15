import {Routes, Route, Link} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Product from './components/Product'
import DetailProduct from './components/DetailProduct'


const Header = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/products">Products</Link>
			</li>
		</ul>
	)
}

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
        <Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Product />} />
        <Route path="/products/" element={<Product />} />
        <Route path="/products/:productsId" element={<DetailProduct />} />



			</Routes>
		</div>
	)
}

export default App;