// import {Component} from "react";
// import Movie from "./Movie";
// import NotFound from "./NotFound";

// class Movies extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.props = props;
// 	}

// 	render() {
// 		const {movies} = this.props;
// 		return (
// 				<div className="movies">
// 					{movies ? movies.map(movie => (
// 						<Movie key={movie.imdbID} {...movie}/>
// 					)) :
// 					<NotFound />}
// 				</div>
// 		);
// 	}
// }

// export default Movies;
























import {Component} from "react";
import Movie from "./Movie";
import NotFound from "./NotFound";

export default class Movies extends Component {
	render() {
		const {movies} = this.props;
		console.log(movies);
		return (
			<div className="movies">
				{movies ? movies.map(movie => (
					<Movie key={movie.imdbID} {...movie} />
				)) : <NotFound /> }
			</div>
		);
	}
}



















