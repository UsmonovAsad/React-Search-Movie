import {Component} from "react";

class Movie extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const {Title,Year,imdbID,Type,Poster} = this.props;
		return (
				  <div key={imdbID} className="card movie">
				    <div className="card-image waves-effect waves-block waves-light">
				      <img className="activator" src={Poster} alt={Title} />
				    </div>
				    <div className="card-content">
				      <span className="card-title activator grey-text text-darken-4">{Title}</span>
				      <p className="black-text">{Year} <span className="right">{Type}</span></p>
				    </div>
				  </div>
		);
	}
}

export default Movie;