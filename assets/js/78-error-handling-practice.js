document.getElementById("frmLogin").addEventListener("submit", (e)=>{
    e.preventDefault();

    const emailEl = document.getElementById("txtEmail");
    const passEl = document.getElementById("txtPassword");

    try{

        if(!isEmail(emailEl.value)) throw "Please enter a valid email";
        if(!passEl.value) throw "Please enter a valid password";
        if(passEl.value.length < 8) throw "Enter a pass at least 8 digits";
        e.target.submit();

    }catch(er){
        alert(er);
    }
    


})
const isEmail = (email)=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}