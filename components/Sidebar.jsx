import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
// import { useEffect } from 'react';
import productActions from "../redux/actions/productActions";

import Products from "./Products";



function Sidebar() {
    const [category, setCategory] = React.useState("")
    const [reload, setReload] = React.useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productActions.getProducts())
    }, []);

        const currentStore = useSelector(store => store.productReducer.filter)
        // console.log(currentStore)
    return (
        <>
        {currentStore && <Products filterStore={currentStore}></Products>}
        </>
    );
}

export default Sidebar;