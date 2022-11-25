import { StyledDivHeader, StyledHeader } from "./style";
import logo from "../../img/logo.svg";

export function Header({ productList, setProductList, observer, setObserver }) {
    function searchProduct(value) {
        const search = productList.filter((product) =>
            product.name.toLowerCase().includes(value.trim().toLowerCase())
        );
        if (value === "") {
            setObserver(observer + 1);
        }

        return setProductList(search);
    }

    return (
        <StyledHeader>
            <StyledDivHeader>
                <img src={logo} alt="" />
                <div>
                    <input
                        onChange={(event) => {
                            searchProduct(event.target.value);
                        }}
                        type="text"
                        placeholder="Digitar pesquisa"
                    />
                    <button>Pesquisar</button>
                </div>
            </StyledDivHeader>
        </StyledHeader>
    );
}
