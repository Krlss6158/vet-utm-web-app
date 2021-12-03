import React, { useEffect, useState, useMemo } from "react";
import { BiFirstPage, BiLastPage } from 'react-icons/bi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
const PaginationComponent = ({
    total = 0,
    itemsPerPage = 10,
    currentPage = 1,
    onPageChange
}) => {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage));
    }, [total, itemsPerPage]);

/*     const paginationItems = useMemo(() => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <div
                    key={i}
                    active={i === currentPage}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </div>
            );
        }

        return pages;
    }, [totalPages, currentPage]); */

    if (totalPages === 0) return null;

    return (
        <div className='px-4 py-2 w-full flex items-center justify-end space-x-1'>
            <small>
                Página {currentPage} de {totalPages} páginas. Total de filas {total}
            </small>
            <button onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className='bg-blueGray-100 p-2 rounded-full border hover:bg-gray-200'
            >
                <BiFirstPage />
            </button>

            <button onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className='bg-blueGray-100 p-2 rounded-full border hover:bg-gray-200'
            >
                <GrFormPrevious />
            </button>

            <button onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='bg-blueGray-100 p-2 rounded-full border hover:bg-gray-200'
            >
                <GrFormNext />
            </button>

            <button onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className='bg-blueGray-100 p-2 rounded-full border hover:bg-gray-200'
            >
                <BiLastPage />
            </button>
        </div>
    );
};

export default PaginationComponent;