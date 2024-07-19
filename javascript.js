function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var number=document.validateform.number.value;
    var aname=document.validateform.aname.value;
    if(fname==null||fname=="")
    {
        alert("Please enter FirstName");
        return false;
    }
    else if(lname==null||lname=="")
        {
            alert("Please Enter LastName");
            return false;
        }
        else if(number.length<10){
            alert("Please Enter 10 Digit Number");
            return false
        }
        else if(aname==null||aname=="")
            {
                alert("Please Enter Address");
                return false;
            }

    }
    
