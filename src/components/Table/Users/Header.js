import { useState } from "react";

import { ImSortAlphaDesc, ImSortAlphaAsc } from 'react-icons/im';

const Header = ({
    arr = [],
    onSorting
}) => {

    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead className="bg-blueGray-100">
            <tr>
                {
                    arr.map(({ name, field, sortable }, key) => {
                        return (
                            <th
                                key={key}
                                name={name}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                onClick={() =>
                                    sortable ? onSortingChange(field) : null
                                }
                            >
                                <span className='flex items-center space-x-1'>
                                    <div>{name}</div>

                                    {sortingField && sortingField === field && (
                                        sortingOrder === "asc" ?
                                            <ImSortAlphaDesc />
                                            :
                                            <ImSortAlphaAsc />
                                    )}

                                </span>
                            </th>
                        );
                    })
                }
                <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Acciones</span>
                </th>
            </tr>
        </thead>
    );
}

export default Header;