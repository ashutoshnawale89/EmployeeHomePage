class EmployeePayRollData{

    get id()
    {
        return this.id;
    }

    set id(id)
    {
        let idRegex = RegExp('[1-9]{1}[0-9]*');
        if(idRegex.test(id))
        this.id = id;
        else
        throw 'Id is incorrect';
    }

    get name()
    {
        return this.name;
    }

    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
        this.name = name;
        else 
        throw 'Name is incorrect';
    }

    get profilePic()
    {
        return this._profilePic;
    }

    set profilePic(profilePic)
    {
        this.profilePic = profilePic;
    }

    get gender()
    {
        return this.gender;
    }

    set gender(gender)
    {
        this.gender = gender;
    }

    get department()
    {
        return this.department;
    }

    set department(department)
    {
        this.department = department;
    }

    get salary()
    {
        return this.salary;
    }

    set salary(salary)
    {
        this.salary = salary;
    }

    get note()
    {
        return this.note;
    }

    set note(note)
    {
        this.note = note;
    }

    get startDate()
    {
        return this.startDate;
    }

    set startDate(startDate)
    {
        let datee = new Date();
        if(startDate<=datee)
        {
        this.startDate = startDate;
        }
        else
        throw 'StratDate is incorrect';
    }

    toString()
    {
        const format = {year:'numeric', month:'long', day:'numeric'};
        const date = this.startDate === undefined ? "undefined" :
                     this.startDate.toLocaleDateString("en-US",format);
        return "Id = "+this.id+", Name = "+this.name+", Gender = "+this.gender+", ProfilePic = "+this.profilePic+", Department = "+this.department+", Salary = "+this.salary+
                ", StartDate = "+date+", Note = "+this.note;
    }

}