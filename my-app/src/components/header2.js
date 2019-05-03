import React , { Component } from 'react'

//Class Component
class Header2 extends Component{
    constructor(props){
        super(props);
        console.log("constructor");
	}
	
	render(){
		return(
			<div className="container-fluid">
	<div className="row">
		<div className="col-md-4">
		</div>
		<div className="col-md-8">
			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link active" href="#">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Profile</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#">Messages</a>
				</li>
				<li className="nav-item dropdown ml-md-auto">
					 <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
						 <a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
						<div className="dropdown-divider">
						</div> <a className="dropdown-item" href="#">Separated link</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
    </div>
        )
    }
}

export default Header2