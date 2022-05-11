import { employeeList } from "./data/employeeList"
import "./styles/EmployeeListingComponent.css";

export function EmployeeListingComponent() {


    function deleteEmployee(event) {
        alert(event.target.className)
    }

    return (
        <div>
            <h1>Employee List is given below:</h1><hr/>
            {employeeList.map(function(employee) {
                return (
                    <div>
                        <EmployeeDetails emp={employee}></EmployeeDetails>
                    </div>
                )
            })}
        </div>
    )
}


function EmployeeDetails(props) {
    debugger;
    return (
        <div>
            <h1>User Name is {props.emp.name}</h1>
            <h2>This is Sample Element</h2>
            <input 
                style={{color: "red", paddingLeft: "20px"}} className={props.employee.name} 
                type="button" 
                value="Delete" /><hr/>
        </div>
    )
}