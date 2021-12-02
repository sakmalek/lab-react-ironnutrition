import {useState} from "react";
import {Input} from "antd";

function Search({search}) {

    const [searchWord, setSearchWord] = useState("");

    return (
        <div className="search-bar">
            <form>
                <label htmlFor="search">Search:</label>
                <Input type="search"
                       style={{width: "100%"}}
                       value={searchWord}
                       onChange={e => {
                           setSearchWord(e.target.value)
                           search(e.target.value)
                       }}/>
            </form>

        </div>
    );
}

export default Search;