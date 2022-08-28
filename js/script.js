const inputArea=document.getElementById('email');
const submitBtn=document.querySelector('.arrow-logo-block');
const errorIcon=document.querySelector('.error-icon');
const errorMsge=document.querySelector('.error-msge');

const emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


submitBtn.addEventListener('click',function(e){
    e.preventDefault();

    submitBtn.style.backgroundImage="linear-gradient(135deg, hsl(0deg, 80%, 86%), hsl(0deg 33% 85%))";

    if(inputArea.value === ""){
        errorMsge.textContent="Email cannot be empty";
        inputArea.style.border="2px solid red";
        errorIcon.classList.remove('hidden');

    }

    else if(!inputArea.value.match(emailPattern)){
         inputArea.style.border="2px solid red";
         errorIcon.classList.remove('hidden');
         errorMsge.textContent="Please provide a valid email";
         inputArea.placeholder="manish";
    }
    
    else{
        inputArea.style.border="2px solid green";
    }
    

   
});