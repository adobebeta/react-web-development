import React ,{ Component} from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component{

    showProduct(){
            return this.props.products && this.props.products.map(
                product => (<ProductItem key = {product.productId} prodict={product} onAddOrder= {this.props.onAddOrder}/>)
                )
            }
    
                //สองบรรทัดนี้เหมือนกัน
            // <ProductItem productName = {product.productName} unitPrice = {product.productPrice} />
            
    render(){
        return(
            <div className="row">
                {this.showProduct()}
            </div>
        );
    }
    
}

export default ProductList;