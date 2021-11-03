import {Component} from "react";

class Loader extends Component {
	render() {
		return (
			<div className="loader">
				<div className="lds-hourglass"></div>
			</div>
			
		);
	}
}

export default Loader;