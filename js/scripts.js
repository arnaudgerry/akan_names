//defining akan names object
let akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

//based on day and object names return Akan name
let getAkanName = (objectNames, day) => {
    //gender value on select
    let selectElement = document.getElementById("gender");
    let genderValue = selectElement.options[selectElement.selectedIndex].value;
    if (genderValue == "none") {
        return "none"
    };
    if (genderValue == "male") {
        for (let i = 0; 1 < objectNames.male.length; i++) {
            if (parseInt(day) === i) {
                return objectNames.male[i];
            }
        }
    }
    for (let i = 0; i < objectNames.female.length; i++) {
        if (parseInt(day) === i) {
            return objectNames.female[i];
        }
    }
};

//generate name from brithday
let generateAkanName = e => {
    e.preventDefault()
    let date = document.getElementById("date").value;
    if (!date) return alert ("Please provide a date");
    let birthday =  new Date(date);
    let akanNameValue = getAkanName(akanNames, birthday.getDay());
    if (akanNameValue === "none") {
        alert("Please select a gender")
        return
    }
    if (date && akanNameValue !== "none") {
        let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < daysOfTheWeek.length; i++){
            if (birthday.getDay() === i) {
                document.getElementById("akan-name").textContent = `Your were born on ${daysOfTheWeek[i]}, your Akan name is likely to be ${akanNameValue}`;
                document.getElementById("akan-name").style.backgroundColor = "yellow"
            }
        }
    }
}