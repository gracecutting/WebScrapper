var employeePromise = d3.csv("employee.csv")

var successFCN = function (employees)
{
    console.log("faculty", employees);
    drawTable(employees);
}

var failFCN = function(error)
{
    console.log("error", error);
}

employeePromise.then(successFCN,failFCN);

var drawTable = function(faculty)
{
    var rows = d3.select("#EmployeeTable tbody")
            .selectAll("tr")
            .data(faculty)
            .enter()
            .append("tr");
    
    rows.append("td")
        .text(function(faculty)
        {
            return faculty.Name;
        })
    
    rows.append("td")
        .text(function(faculty)
        {
            return faculty.Title;
        })
    
    rows.append("td")
        .text(function(faculty)
        {
            return faculty.Email;
        })
}
