import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { Button } from 'bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();    

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

  return (
    <div className="container">
        <h2 className="text-center">List of Employees</h2>
        <button type="button" class="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-info table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td align='center'>
                                <button class="btn btn-dark" onClick={()=> updateEmployee(employee.id)}>Update</button>
                                <button class="btn btn-danger" onClick={()=> removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent