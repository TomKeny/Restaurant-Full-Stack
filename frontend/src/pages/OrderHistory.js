import { useEffect, useState } from "react"
import getItems from "../api/getItem"

export function OrderHistory({userID}) {
    
    const [orders, setOrders] = useState([])

    async function getOrders() {
        //const response = await getItems("order", { UserID: userID })
        //setOrders(response)
    }
    useEffect(() => {
        getOrders()
    },[])
    
    return (
        <div className="h-full bg-gray-100 pt-2 text-gray-700">
            <h1 className="m-5 text-center text-gray-700 text-2xl font-bold">Order History</h1>
            <div className="mt-6 h-full rounded-lg border bg-gray-100 p-6 shadow-md md:mt-0 md:w-11/12 ml-auto mr-auto">
                {orders.map((order) => {

                    let orderID = order._id
                    let purchasedItems = order.ItemID
                    let price = 0
                    for (let i = 0; i < purchasedItems.length; i++) {
                        price += purchasedItems[i].Price
                    }
                    
                    return (<>
                <h1 className="text-sm text-gray-700 font-bold text-center">Order ID: {orderID}</h1>
                <div className="rounded-lg md:w-1/2 mr-auto ml-auto">

                    {
                        purchasedItems.map((item) => {
                            return (item.quantity > 0) && <div div className="justify-between mb-2 rounded-lg bg-white p-2 shadow-md sm:flex sm:justify-start" >

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
                </>
                )
                })}
            </div>
        </div>
    )
}