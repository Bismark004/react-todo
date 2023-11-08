import react from "react";
import './searchBox.css';

function SearchBox(props){

        return (
            <div className="search-box">
                <input onChange={props.onChange} value={props.value} />
                <button onClick={props.onClick}>Add task</button>
            </div>
        )
    
}
export default SearchBox;