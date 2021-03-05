class Employee {
    constructor(empID, title, firstName, lastName, contact, mail, status, district, city, compensation, CTC) {
        this.EmployeeID = empID;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Title = title;
        this.OfficeContact = contact;
        this.EMail = mail;
        this.Status = status;
        this.District = district;
        this.City = city;
        this.YearlyCompensation = compensation;
        this.CostToCompany = CTC;
    }
}

export default Employee;
