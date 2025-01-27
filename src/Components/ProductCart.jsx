import React, { useReducer } from "react";
export const ProductCart = ({ itemData, removeFromCart, updateQuantity }) => {
    return (
        <div className="w-1/2 border m-2">

            <h1 className="text-center text-3xl text-black">Cart</h1>

            {itemData.length === 0 ? (
                <p className="text-center text-xl text-teal-500 mt-4">
                    No Product added to the cart <br />
                    <span className="text-5xl font-semibold">!</span>
                </p>
            )
                : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {itemData.map((item) => (
                            <div
                                key={item.id}
                                className="border p-4 rounded-lg flex flex-col justify-between"
                            >
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                                    <p className="text-gray-700">${item.price}</p>
                                </div>

                                <div className="flex justify-between items-center mt-4">

                                    <button
                                        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>

                                    <input
                                        type="number"
                                        min="0"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(item.id, parseInt(e.target.value))
                                        }
                                        className="w-16 text-center border-gray-300 rounded-md"
                                    />

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            {itemData.length > 0 && (
                <h2 className="text-center text-xl text-black m-4">

                    Total cost : <span className="text-red-400 ml-2">$</span>
                    <span className="text-green-400">
                        {itemData.reduce(
                            (total, item) => total + item.price * item.quantity,0)}
                    </span>

                </h2>
            )}
        </div>
    );
};
