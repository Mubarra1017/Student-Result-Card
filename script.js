function generateMarksheet() {
    // Student Details
    let name = document.getElementById("name").value.toUpperCase();
    let fathername= document.getElementById('fathername').value.toUpperCase();
    let roll = document.getElementById("roll").value;
    let studentClass = document.getElementById("class").value;
    // Subject Marks
    let eng = Number(document.getElementById("eng").value);
    let urdu = Number(document.getElementById("urdu").value);
    let math = Number(document.getElementById("math").value);
    let phy = Number(document.getElementById("phy").value);
    let comp = Number(document.getElementById("comp").value);
    let chem = Number(document.getElementById("chem").value);
    let isl = Number(document.getElementById("isl").value);
    let pak = Number(document.getElementById("pak").value);
    // Validation
    if (
        name == "" ||
        fathername == "" ||
        roll == "" ||
        studentClass == "" ||
        isNaN(eng) ||
        isNaN(urdu) ||
        isNaN(math) ||
        isNaN(phy) ||
        isNaN(comp) ||
        isNaN(chem) ||
        isNaN(isl) ||
        isNaN(pak)
    ) 
    {
        alert("Please fill all fields.");
        return;
    }
    // Total & Obtained Marks
    let total = 800;
    let obtained = eng + urdu + math + phy + comp + chem + isl + pak;
    // Percentage
    let percentage = (obtained / total) * 100;
    // Grade
    let grade;
    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    // Pass / Fail
    let result;
    if (percentage >= 40) {
        result = "Pass";
    }
    else {
        result = "Fail";
    }
    // Save Data in Local Storage
    localStorage.setItem("name", name);
    localStorage.setItem("fathername", fathername);
    localStorage.setItem("roll", roll);
    localStorage.setItem("class", studentClass);
    localStorage.setItem("eng", eng);
    localStorage.setItem("urdu", urdu);
    localStorage.setItem("math", math);
    localStorage.setItem("phy", phy);
    localStorage.setItem("comp", comp);
    localStorage.setItem("chem", chem);
    localStorage.setItem("isl", isl);
    localStorage.setItem("pak", pak);
    localStorage.setItem("total", total);
    localStorage.setItem("obtained", obtained);
    localStorage.setItem("percentage", percentage.toFixed(2));
    localStorage.setItem("grade", grade);
    localStorage.setItem("result", result);
    // Open Result Page
    window.location.href = "marksheet.html";
}