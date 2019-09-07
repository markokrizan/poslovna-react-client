import React, { useState, useEffect } from 'react'
import {chunk, isEqual} from 'lodash'

export default function GenericPagination({ returnPage, data }){

    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(-1)

    useEffect(() => {
      returnPage(pages[currentPage])
      debugger
    }, [currentPage])

    //Return the initial page
    useEffect(() => {
      debugger
      returnPage(pages[currentPage])
    }, [pages])


    useEffect(() => {
        //seccond param - per page
        setPages(chunk(data, 5))        
        debugger
    }, [data])
    
    const hasNext = () => currentPage !== pages.length - 1
    
    const previous = () => {
        debugger
        if(currentPage >= 1){
            setCurrentPage(currentPage - 1)
        }
    }
  
    const next = () => {
        debugger
        setCurrentPage(currentPage + 1)
    }

    const styleLi = hasNext()
      ? { color: 'darkgrey', cursor: 'pointer' }
      : { cursor: 'pointer' };
    
    const styleAnchor = !hasNext() ? { pointerEvents: 'none' } : {};
    
    return (
        <ul className="pagination d-flex justify-content-center align-items-center">
          <li className="page-item" style={{ cursor: 'pointer' }}>
            <button type="button" className="page-link" onClick={previous}>
              <span className="text-dark">«</span>
            </button>
          </li>
          <li className="page-item" style={styleLi}>
            <button type="button" style={styleAnchor} className="page-link" onClick={next}>
              <span className="text-dark">»</span>
            </button>
          </li>
        </ul>
      );
}