import React, { useEffect, useState } from 'react';
import { getFicalYearDocuments, getFiscalYears } from '../services/FiscalYearService'
import { stornoDocument } from '../services/DocumentService'
import { Link } from "react-router-dom";

export default function Documents(){

    const [documents, setDocuments] = useState([])
    const [fiscalYears, setFiscalYears] = useState([])
    const [selectedFiscalYear, setSelectedFiscalYear] = useState(1)

    useEffect(() => {
        (async () => {
            setDocuments(await getFicalYearDocuments(selectedFiscalYear))
            setFiscalYears(await getFiscalYears())
        })()
    }, [])

    const documentStorno = async (id) => {
        await stornoDocument(id)
        setDocuments(await getFicalYearDocuments(selectedFiscalYear))
    }

    const renderDocuments = () => {
        return documents.map((document, idx) => {
            console.log(document)
            return (
                <tr>
                    <td>{idx + 1}</td>
                    <td>{document.documentType}</td>
                    <td>{document.sourceWarehouseName}</td>
                    <td>{document.targetWarehouseName}</td>
                    <td>{document.businessPartnerName}</td>
                    <td>{document.formedOn}</td>
                    <td>{document.bookedOn}</td>
                    <td>{document.status}</td>
                    <td>
                        <Link className = "btn btn-info" to={`/documents/${document.id}/items`}>Info</Link>
                        <button className = "btn btn-danger" onClick = {() => documentStorno(document.id)}>Storno</button>
                    </td>
                </tr>
            )
        })
    }


    const renderFiscalYears = () => {
        return fiscalYears.map(fiscalYear => {
            return (
                <option value = {fiscalYear.id}>{fiscalYear.year}</option>
            )
        })
    }


    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 p-0 bg-info">
                <div className="card">
                    <div className="card-header d-flex justify-content-center align-items-center">
                        {" "} Documents
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                                <h5 className="">Pick fiscal year:</h5>
                            </div>
                            <div className="col-md-6 d-flex">
                                <select 
                                    defaultValue={1}
                                    className="w-50 rounded"
                                    onChange={e => setSelectedFiscalYear(e.target.value)}
                                    > 
                                    {renderFiscalYears()}
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" className="text-center">
                                                Document type
                                            </th>
                                            <th scope="col" className="text-center">
                                                Source warehouse
                                            </th>
                                            <th scope="col" className="text-center">
                                                Destination warehouse
                                            </th>
                                            <th scope="col" className="text-center">
                                                Business partner
                                            </th>
                                            <th scope="col" className="text-center">
                                                Formed on
                                            </th>
                                            <th scope="col" className="text-center">
                                                Booked on
                                            </th>
                                            <th scope="col" className="text-center">
                                                Status
                                            </th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>{renderDocuments()}</tbody>
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