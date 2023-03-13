
    
    let yourname = document.getElementById("input-name");
    let number = document.querySelector('#input-number');
    let email = document.getElementById("input-email");
    let messageName = document.getElementById("mess-name");
    let messageMail = document.getElementById("mess-email");
    let messageNumber = document.getElementById("mess-number");
    
//validate name
    yourname.addEventListener("focusout", function(){
        let n = yourname.value; 
        if(n ==""){
            messageName.style.color = "red"
            messageName.innerHTML= "Name is required!!"
        }else if( n.length > 30|| n.length < 3|| !isNaN(n)){
            messageName.style.color = "red"
            messageName.innerHTML= "Your Name is valid!"
        }
        else{
            messageName.style.color = "green"
            messageName.innerHTML = "required!!"
        }
    })

    //validate email
    email.addEventListener("focusout", function(){
        let m = email.value;  
        let at_position = m.indexOf("@");  
        let dot_position = m.lastIndexOf(".");
        if(m ==""){
            messageMail.style.color = "red"
            messageMail.innerHTML= "Email is required!!" 
        }
        else if (at_position < 1 || dot_position < at_position + 2 || dot_position +2 >= m.length){  
            messageMail.style.color = "red"
            messageMail.innerHTML= "Your email is valid!" 
        }else{
            messageMail.style.color = "green"
            messageMail.innerHTML = "required !!"
        }
    })
    //validate  phonenumber
    number.addEventListener("focusout", function(){
        let num = number.value; 
        if(num == ""){
            messageNumber.style.color = "red"
            messageNumber.innerHTML= "Number Phone is required!!"
        }
        else if(isNaN(num)||num.length <=9){
            messageNumber.style.color = "red"
            messageNumber.innerHTML= "Your phone number is valid!"
        }else if(num.indexOf("09")!==0 && num.indexOf("07")!==0 &&
         num.indexOf("03")!==0 && num.indexOf("08")!==0 && num.indexOf("05")!==0){
            messageNumber.style.color = "red"
            messageNumber.innerHTML= "Your phone number must start with 09 03 05 07 08 !"
        }else{
            messageNumber.style.color = "green"
            messageNumber.innerHTML = "required !!"
        }
    })




 
    
    // }
