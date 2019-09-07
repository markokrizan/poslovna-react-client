import React, { useState, useEffect } from 'react'
import {chunk} from 'lodash'

export default function GenericPagination({ returnPage, data }){

    const [pages, setPages] = useState([]);

    const [paginationState, setPaginationState] = useState({
      currentPage : 0,
      totalPages : 0
    });

    useEffect(() => {
        setPages(chunk(data, 5))        
    }, [data])

    useEffect(() => {
      setPaginationState({
        ...paginationState,
        totalPages: pages.length
      })
    }, [pages])

    useEffect(() => {
      returnPage(pages[paginationState.currentPage])
    }, [paginationState])


    const next = () => {
      if(paginationState.currentPage < pages.length - 1){
        setPaginationState({...paginationState, currentPage: paginationState.currentPage + 1})
      }
      
    }

    const previous = () => {
      if(paginationState.currentPage > 0){
        setPaginationState({...paginationState, currentPage: paginationState.currentPage - 1})
      }
    }
    
    return (
        <ul className="pagination d-flex justify-content-center align-items-center">
          <li className="page-item" style={{ cursor: 'pointer' }}>
            <button type="button" className="page-link" onClick={previous}>
              <span className="text-dark">«</span>
            </button>
          </li>
          <li className="page-item" style={{ cursor: 'pointer' }}>
            <button type="button" className="page-link" onClick={next}>
              <span className="text-dark">»</span>
            </button>
          </li>
        </ul>
      );  
}