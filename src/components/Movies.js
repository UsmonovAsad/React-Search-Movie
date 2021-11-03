import {Component} from "react";
import Movie from "./Movie";
import NotFound from "./NotFound";

class Movies extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const {movies} = this.props;
		return (
				<div className="movies">
					{movies ? movies.map(movie => (
						<Movie key={movie.imdbID} {...movie}/>
					)) :
					<NotFound />}
				</div>
		);
	}
}

export default Movies;