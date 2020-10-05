var nameOfTheStudentsArray=[];
function submit(){
    var name_1=document.getElementById("name_of_student_1").value;
    var name_2=document.getElementById("name_of_student_2").value;
    var name_3=document.getElementById("name_of_student_3").value;
    var name_4=document.getElementById("name_of_student_4").value;

    nameOfTheStudentsArray.push(name_1);
    nameOfTheStudentsArray.push(name_2);
    nameOfTheStudentsArray.push(name_3);
    nameOfTheStudentsArray.push(name_4);
    console.log(nameOfTheStudentsArray);
    
document.getElementById("displayName").innerHTML=nameOfTheStudentsArray;
document.getElementById("submitButton").style.display="none";
document.getElementById("sortButton").style.display="inline-block";
}
function sort(){
    nameOfTheStudentsArray.sort();
    console.log(nameOfTheStudentsArray);
    document.getElementById("displayName").innerHTML=nameOfTheStudentsArray;
}