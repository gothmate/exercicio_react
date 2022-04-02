import React from "react";
import produtos from "../data/products.js";

export default function Repeticao(props) {

    function getProdutosListItem() {
        return produtos.map(produto => {
            return ( 
                <li>
                    id{produto.id} - {produto.name}: R${produto.price}
                </li>
            )
        })
    }

    return (
        <div>
            <h2>Produtos</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}