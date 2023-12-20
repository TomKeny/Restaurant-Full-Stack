import { Link } from "react-router-dom";
import placeholderImg from "../images/tray-plate-svgrepo-com.svg";

export const CartPage = ({ cartItems, cartSubTotal, addToCart, removeFromCart, destroyFromCart }) => {

	if (cartItems.length === 0) {
		return (
			<div className="h-screen bg-gray-100 pt-2 text-gray-700">
				<h1 className="m-5 text-center text-gray-700 text-4xl font-bold">Cart</h1>
				<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

					<h1 className="text-center">Your cart is empty</h1>
				</div>
			</div>
		)
	}

	return (
		<div className="h-screen bg-gray-100 pt-2 text-gray-700">
			<h1 className="m-5 text-center text-gray-700 text-4xl font-bold">Cart</h1>
			<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
				<div className="rounded-lg md:w-2/3">

					{
						cartItems.map((item) => (
							<div div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" >

								{/* TODO - image needed here */}
								< img src={placeholderImg} alt="product" className="w-full rounded-lg sm:w-40" />

								<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
									<div className="mt-5 sm:mt-0">
										<h2 className="text-lg font-bold text-gray-900">{item.FoodName}</h2>
									</div>
									<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
										<div className="flex items-center border-gray-100">
											<button onClick={() => removeFromCart(item, 1)} disabled={item.quantity === 0} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
											<input className="h-8 w-8 border bg-white text-center text-xs outline-none" value={item.quantity} min="1" />
											<button onClick={() => addToCart(item, 1)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
										</div>
										<div className="flex items-center space-x-4">
											<p className="text-sm">{`£${item.Price * item.quantity}`}</p>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={() => destroyFromCart(item)}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						))
					}


				</div>
				{/* <!-- Sub total --> */}
				<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
					<div className="mb-2 flex justify-between">
						<p className="text-gray-700">Subtotal</p>
						<p className="text-gray-700">{`£${cartSubTotal}`}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-gray-700">Delivery</p>
						<p className="text-gray-700">£4.99</p>
					</div>
					<hr className="my-4" />
					<div className="flex justify-between">
						<p className="text-lg text-gray-700 font-bold">Total</p>
						<div className="">
							<p className="mb-1 text-lg text-gray-700 font-bold">{`£ ${(cartSubTotal + 4.99 + (cartSubTotal * 0.2)).toFixed(2)} GBP`}</p>
							<p className="text-sm text-gray-700">including VAT</p>
						</div>
					</div>
					<Link
						to={cartSubTotal === 0 ? "/cart" : "/checkout"}
						className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 display: block text-center">
						Check out
					</Link>
				</div>
			</div>
		</div >
	)
}
