import Movie from "./Movie";
import NotFound from "./NotFound";

export default function Movies(props) {
	const {movies} = props;
	return (
		<div className="movies">
			{movies ? movies.map(movie => (
				<Movie key={movie.imdbID} {...movie}/>
			)) :
			<NotFound />}
		</div>
	);
}