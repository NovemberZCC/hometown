function myFunction() {
    var value = document.getElementById("text input").value    
    if(value=="student"){
        location.replace("course details2.html")
        return true
    }
    else if(value=="parents"){
        location.replace("index.html")
        return true
    }
    else{
        alert("Please enter student or parents")
    }
    }