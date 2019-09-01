import React, { useEffect, useState } from 'react'
import { getDocumentItems } from '../services/DocumentService'

export default function DocumentItems({match}){
    
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            debugger
            setItems(await getDocumentItems(match.params.id))
        })()
    }, [])

    // {
    //     "articleName": "string",
    //     "price": 0,
    //     "quantity": 0,
    //     "value": 0
    //   }

    const renderItems = () => {
        return items.map((item, idx) => {
            return (
                <tr>
                    <td>{idx + 1}</td>
                    <td>{item.articleName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.value}</td>
                </tr>
            )
        })
    }


    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 p-0 bg-info">
                <div className="card">
                    <div className="card-header d-flex justify-content-center align-items-center">
                        {" "} Document items
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" className="text-center">
                                                Article name
                                            </th>
                                            <th scope="col" className="text-center">
                                                Price
                                            </th>
                                            <th scope="col" className="text-center">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-center">
                                                Value
                                            </th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>{renderItems()}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}