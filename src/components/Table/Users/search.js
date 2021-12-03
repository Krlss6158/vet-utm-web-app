import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const onInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    return (
        <div className='ml-4 mb-2 max-w-sm'>
            <input
                type="text"
                className='border px-3 py-3 rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-500 w-full'
                placeholder="Search"
                value={search}
                onChange={e => onInputChange(e.target.value)}
            />
        </div>
    );
};

export default Search