import {useState} from "react";

export default function Search({search}) {
	const [searchValue,setSearchValue] = useState("panda"),
		[type,setType] = useState("");

	function changeRadio(e) {
		setType(e.target.value);
		search(searchValue,e.target.value);
	}

	return (
		<div className="row">
	          <div className="input-field">
	            <input
	              type="search"
	              className="validate input"
	              placeholder="Search..."
	              value={searchValue}
	              onChange={e => setSearchValue(e.target.value)}
	              onKeyDown={e => e.key === "Enter" && search(searchValue,type)}
	            />
	            <button
	              className="btn search-btn"
	              onClick={() => search(searchValue,type)}>
	            	Search Movies
	            </button>
	          </div>
	          <div className="radios">
	          	<label className="label">
			        <input
			          id="all"
			      	  className="with-gap"
			          name="type" 
			          type="radio" 
			          checked={type === ""}
			          value=""
			          onChange={changeRadio}/>
			          <label htmlFor="all" className="checkbox-clone">
			          	<span></span>
			          </label>
			        <span>All</span>
			    </label>
			    <label className="label">
			        <input
			      	  className="with-gap"
			      	  id="movie"
			          name="type" 
			          type="radio"
			          value="movie"
			          checked={type === "movie"}
			          onChange={changeRadio}/>
			          <label htmlFor="movie" className="checkbox-clone">
			          	<span></span>
			          </label>
			        <span>Movies Only</span>
			    </label>
			    <label className="label">
			        <input
			      	  className="with-gap"
			      	  id="series"
			          name="type" 
			          type="radio" 
			          value="series"
			          checked={type === "series"}
			          onChange={changeRadio}/>
			          <label htmlFor="series" className="checkbox-clone">
			          	<span></span>
			          </label>
			        <span>Series Only</span>
			    </label>
	          </div>
	    </div>
	);
}