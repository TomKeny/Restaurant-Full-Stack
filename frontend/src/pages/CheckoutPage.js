import { useState } from "react"
import addItem from "../api/addItem"

export const CheckoutPage = ({ cartItems, setCartItems, cartSubTotal, userID }) => {

	const [purchased, setPurchased] = useState(false)
	const [purchasedItems, setPurchasedItems] = useState()
	const [price, setPrice] = useState()
	const [orderID, setOrderID] = useState()

	async function purchase() {
		let response
		if (userID !== "") {
			response = await addItem("order", { UserID: userID.UserID, ItemID: cartItems })
		}
		else {
			response = await addItem("order", { UserID: "User not logged in", ItemID: cartItems })
		}
		setOrderID(response.Item._id)
		setPurchased(true)
		setPurchasedItems([...cartItems])
		setPrice(cartSubTotal)
		setCartItems([])
	}

	if (!purchased) {
		return (
			<div className="bg-gray-100 py-10 text-gray-700">
				<h1 className="m-5 text-center text-gray-700 text-4xl font-bold">Checkout</h1>
				<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
					<div className="rounded-lg md:w-2/3">

						{
							cartItems.map((item) => {
								return (item.quantity > 0) && <div className="justify-between mb-2 rounded-lg bg-white p-5 shadow-md sm:flex sm:justify-start" >

									{/* TODO - image needed here */}
									<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
										<div className="mt-5 sm:mt-0">
											<h2 className="text-lg font-bold text-gray-900">{item.FoodName}</h2>
										</div>
										<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
											<div className="flex items-center border-gray-100">
												<p className="h-3 w-30 bg-white text-center"> Quantity: {item.quantity}</p>
											</div>
											<div className="flex items-center space-x-4">
												<p className="text-sm">{`£${item.Price * item.quantity}`}</p>
											</div>
										</div>
									</div>
								</div>
							})
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
							<div>
								<p className="mb-1 text-lg text-gray-700 font-bold">{`£ ${(cartSubTotal + 4.99 + (cartSubTotal * 0.2)).toFixed(2)} GBP`}</p>
								<p className="text-sm text-gray-700">including VAT</p>
							</div>
						</div>
						<button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={() => purchase()}>Purchase</button>
					</div>
				</div>
			</div >
		)
	}

	return (
		<div className="h-full bg-gray-100 pt-2 text-gray-700">
			<h1 className="m-5 text-center text-gray-700 text-4xl font-bold">Checkout</h1>
			<div className="mt-6 h-full rounded-lg border bg-gray-100 p-6 shadow-md md:mt-0 md:w-11/12 ml-auto mr-auto">
				<h1 className="text-4xl text-gray-700 font-bold text-center">Order Summary</h1>
				<h1 className="text-4xl text-gray-700 font-bold text-center">Order ID: {orderID}</h1>
				<div className="rounded-lg md:w-1/2 mr-auto ml-auto">

					{
						purchasedItems.map((item) => {
							return (item.quantity > 0) && <div div className="justify-between m-5 rounded-lg bg-white p-5 shadow-md sm:flex sm:justify-start" >

								{/* TODO - image needed here */}
								<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
									<div className="mt-5 sm:mt-0">
										<h2 className="text-lg font-bold text-gray-900">{item.FoodName}</h2>
									</div>
									<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
										<div className="flex items-center border-gray-100">
											<p className="h-3 w-30 bg-white text-center"> Quantity: {item.quantity}</p>
										</div>
										<div className="flex items-center space-x-4">
											<p className="text-sm">{`£${item.Price * item.quantity}`}</p>
										</div>
									</div>
								</div>
							</div>
						})
					}
				</div>
				<div className="w-1/2 mr-auto ml-auto">
					<div className="mb-2 flex justify-between">
						<p className="text-gray-700">Subtotal</p>
						<p className="text-gray-700">{`£${price}`}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-gray-700">Delivery</p>
						<p className="text-gray-700">£4.99</p>
					</div>
					<hr className="my-4" />
					<div className="flex justify-between">
						<p className="text-lg text-gray-700 font-bold">Total</p>
						<div className="">
							<p className="mb-1 text-lg text-gray-700 font-bold">{`£ ${(price + 4.99 + (price * 0.2)).toFixed(2)} GBP`}</p>
							<p className="text-sm text-gray-700">including VAT</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}