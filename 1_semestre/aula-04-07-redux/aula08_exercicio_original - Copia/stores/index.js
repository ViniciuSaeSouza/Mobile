import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

const store =configureStore({
	reducer: {
		user: userReducer,
		/*
		poderia ter:
		payment: paymentReducer,
		product: productReducer,
		cart: cartReducer,
		*/
	},
})

export default store;