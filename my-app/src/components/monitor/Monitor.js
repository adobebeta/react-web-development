import React , { Component} from "react";
import Calculators from './Calculator';
import ProductList from '../product/ProductList';

class Monitor extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products}/>
                    </div>
                    <div className="col-md-3">
                        <Calculators />
                    </div>

                </div>

            </div>

        )
    }

}

export default Monitor;