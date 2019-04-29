import React ,{ Component} from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component{

    showProduct(){
            return this.props.products && this.props.products.map(product => (
            // <ProductItem productName = {product.productName} unitPrice = {product.productPrice} />

            <ProductItem productName {...product} />
            ))
    }

    render(){
        return(
            <div className="row">
                {this.showProduct()}
            </div>
        );
    }
    
}

export default ProductList;