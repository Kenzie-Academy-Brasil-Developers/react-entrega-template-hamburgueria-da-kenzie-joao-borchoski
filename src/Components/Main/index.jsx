import React from "react";
import { ToastContainer, toast, Zoom,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    StyledMain,
    StyledUlMain,
    StyledCartMain,
    StyledLiMain,
    StyledCartHeader,
    StyledUlCart,
    StyledLiCart,
    StyledTotalMoneyDiv,
} from "./style";


export function Main({productList, setProductList, productCart, setProductCart}) {


    function toastRender(type) {
        if (type === "error") {
            return toast.error("Produto ja adicionado ao carrinho!");
        }
        if (type === "success") {
            return toast.success("Produto removido!");
        }
        if (type === "clear") {
            return toast.success("Carrinho limpo!");
        }
    }

    function card(element) {
        return (
            <StyledLiMain key={element.id}>
                <figure>
                    <img src={element.img} alt="" />
                </figure>
                <div>
                    <h2>{element.name}</h2>
                    <span>{element.category}</span>
                    <p>R$ {element.price}</p>
                    <button
                        onClick={() => {
                            const finder =
                                productCart.find(
                                    (product) => product.name === element.name
                                ) || "";
                            if (finder === "") {
                                setProductCart([...productCart, element]);
                            } else {
                                toastRender("error");
                            }
                        }}
                    >
                        Adicionar
                    </button>
                </div>
            </StyledLiMain>
        );
    }

    function cartHeader() {
        return (
            <StyledCartHeader>
                <h2>Carrinho de compras</h2>
            </StyledCartHeader>
        );
    }

    function emptyCart() {
        return <h2>Seu carrinho esta vazio :(</h2>;
    }

    function cart(element, index) {
        return (
            <StyledLiCart key={index}>
                <figure>
                    <img src={element.img} alt="" />
                </figure>
                <div>
                    <h3>{element.name}</h3>
                    <p>{element.category}</p>
                </div>
                <button
                    onClick={() => {
                        let arrClick = [...productCart];
                        arrClick.splice(index, 1);
                        setProductCart(arrClick);
                        toastRender("success");
                    }}
                >
                    Remover
                </button>
            </StyledLiCart>
        );
    }

    function totalMoney() {
        let contador = 0;

        productCart.forEach((element) => {
            contador += element.price;
        });

        return contador.toFixed(2);
    }

    function renderTotalMoney() {
        if (productCart.length !== 0) {
            return (
                <StyledTotalMoneyDiv>
                    <div>
                        <h3>Total:</h3>
                        <h3>R$ {totalMoney()}</h3>
                    </div>
                    <button
                        onClick={() => {
                            setProductCart([]);
                            toastRender("clear");
                        }}
                    >
                        Remover todos
                    </button>
                </StyledTotalMoneyDiv>
            );
        }
    }

    return (
        <StyledMain>
            <ToastContainer transition={Zoom} autoClose={2000} />
            <StyledUlMain>
                {productList.map((element) => {
                    return card(element);
                })}
            </StyledUlMain>
            <StyledCartMain>
                {cartHeader()}
                <StyledUlCart>
                    {productCart.length === 0
                        ? emptyCart()
                        : productCart.map((element, index) => {
                              return cart(element, index);
                          })}
                </StyledUlCart>
                {renderTotalMoney()}
            </StyledCartMain>
        </StyledMain>
    );
}
