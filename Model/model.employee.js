class Employee {
    constructor(empID, title, firstName, lastName, contact, primaryContact, mail, status, district, city, compensation, CTC) {
        this.EmployeeID = empID;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Title = title;
        this.OfficeContact = contact;
        this.Contact = primaryContact;
        this.EMail = mail;
        this.Status = status;
        this.District = district;
        this.City = city;
        this.YearlyCompensation = compensation;
        this.CostToCompany = CTC;
    }
}

export default Employee;
