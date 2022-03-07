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