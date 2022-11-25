import "./Styles/index.css";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Api } from "./Services/api";

import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
    const [productList, setProductList] = useState([]);
    const [productCart, setProductCart] = useState([]);
    const [observer, setObserver] = useState(0)

    useEffect(() => {
        async function getList() {
            try {
                const response = await Api.get();

                setProductList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getList();
    }, [observer]);

    return (
        <div className="app">
            <Header productList={productList} setProductList={setProductList} observer={observer} setObserver={setObserver}/>
            <Main productList={productList} setProductList={setProductList} productCart={productCart} setProductCart={setProductCart} />
        </div>
    );
}

export default App;
