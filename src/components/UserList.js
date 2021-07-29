import React from 'react'
import { Link } from 'react-router-dom'

export default function UserList() {

    let userdata = [
                        {
                            "id":1,
                            "name":"Airi Satou",
                            "position":	"Accountant",
                            "office": "Tokyo",
                            "age":"33",
                            "date":"2008/11/28",
                            "salary":"$162,700"
                        },
                        {
                            "id":2,
                            "name":"Angelica Ramos",
                            "position":	"Chief Executive Officer (CEO)",
                            "office": "London",
                            "age":"47",
                            "date":"2009/10/09",
                            "salary":"$1,200,000"					
                        },
                        {
                            "id":3,
                            "name":"Ashton Cox",
                            "position":	"Junior Technical Author",
                            "office": "San Francisco",
                            "age":"66",
                            "date":"2009/01/12",
                            "salary":"$86,000"					
                        },
                        {
                            "id":4,
                            "name":"Bradley Greer",
                            "position":	"Software Engineer",
                            "office": "London",
                            "age":"41",
                            "date":"2012/10/13",
                            "salary":"$132,000"						
                        },
                        {
                            "id":5,
                            "name":"Brenden Wagner",
                            "position":	"Software Engineer",
                            "office": "San Francisco",
                            "age":"28",
                            "date":"2011/06/07",
                            "salary":"$206,850"						
                        },
                        {
                            "id":6,
                            "name":"Brielle Williamson",
                            "position":	"Integration Specialist",
                            "office": "New York",
                            "age":"61",
                            "date":"2012/12/02",
                            "salary":"$372,000"							
                        },
                        {
                            "id":7,
                            "name":"Bruno Nash",
                            "position":	"Software Engineer",
                            "office": "London",
                            "age":"38",
                            "date":"2011/05/03",
                            "salary":"$163,500"						
                        },
                        {
                            "id":8,
                            "name":"Caesar Vance",
                            "position":	"Pre-Sales Support",
                            "office": "New York",
                            "age":"21",
                            "date":"2011/12/12",
                            "salary":"$106,450"						
                        },
                        {
                            "id":9,
                            "name":"Cara Stevens",
                            "position":	"Sales Assistant",
                            "office": "New York",
                            "age":"46",
                            "date":"2011/12/06",
                            "salary":"$145,600"					
                        },
                        {
                            "id":10,
                            "name":"Cedric Kelly",
                            "position":	"Senior Javascript Developer",
                            "office": "Edinburgh",
                            "age":"22",
                            "date":"2012/03/29",
                            "salary":"$433,060"					
                        }
                    ]
    
    return (
            <>
            <h1 className="h3 mb-0 text-gray-800">User List</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                    <Link to="/usercreate">Create user</Link>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
            <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    
                                        { userdata.map(e=>{
                                            return <tr key={e["id"]}>
                                            <td>{e["name"]}</td>
                                            <td>{e["position"]}</td>
                                            <td>{e["office"]}</td>
                                            <td>{e["age"]}</td>
                                            <td>{e["date"]}</td>
                                            <td>{e["salary"]}</td>
                                            <td>{<Link to={`/useredit/${e["id"]}`}>User Edit</Link>}</td>
                                        </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
        </>
    )
}
