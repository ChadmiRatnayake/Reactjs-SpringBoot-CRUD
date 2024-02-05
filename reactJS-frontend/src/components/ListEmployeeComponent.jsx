import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id":1,
            "firstName":"John",
            "lastName":"Doe",
            "email":"john@gmail.com"
        },
        {
            "id":2,
            "firstName":"Kiwi",
            "lastName":"Bear",
            "email":"kiwi@gmail.com"
        }
    ]

  return (
    <div class="container">
        <h2 class="text-center">List of Employees</h2>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Employee Id</th>
                    <th scope="col">Employee First Name</th>
                    <th scope="col">Employee Last Name</th>
                    <th scope="col">Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent