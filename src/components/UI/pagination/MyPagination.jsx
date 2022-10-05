import React, { useState } from 'react';
import { AllDragonsPage } from '../../AllDragonsPage/AllDragonsPage';
import cl from '../pagination/MyPagination.module.css';

const MyPagination = ({infoAll}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(1)

    const pages = []
    for(let i = 1; i <= Math.ceil(infoAll.length / itemsPerPage); i++) {
        pages.push(i)
    }
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = infoAll.slice(indexOfFirstItem, indexOfLastItem)

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }
    return (
        <div>
            {currentItems.map((post, index) => 
                <AllDragonsPage post={post} key={index} />
            )}
            <ul className={cl.pageNumbers}>
                {pages.map(number => 
                    <li key={number} id={number} onClick={handleClick}>
                        {number}
                    </li>    
                )}
            </ul>
        </div>
    );
};

export default MyPagination;