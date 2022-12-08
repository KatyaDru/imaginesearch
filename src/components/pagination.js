import React from 'react';


const Pagination = ( { promtsPerPage, totalPromts, paginate, currentPage}) => {

    const pageNumber = []

    for (let i=1; i < Math.ceil(totalPromts / promtsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className='ma3'>
            <ul className='pagination pagination-sm justify-content-center flex-sm-wrap'> {
                pageNumber.map(number =>(
                    <li className={`page-item ${ number === currentPage ? 'active' : ''}`}
                        key={number}>
                        <a href='!#' className='page-link'
                           onClick={() => paginate(number)}>
                            {number} </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;

