export default function Movie(props) {
	const {Title,Year,imdbID,Type,Poster} = props;
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