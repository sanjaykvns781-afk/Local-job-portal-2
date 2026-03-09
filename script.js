 function showForm(){

document.getElementById("formSection").style.display="block";

}



function showJobs(){

let edu=document.getElementById("education").value;

document.getElementById("jobsPage").style.display="block";

document.getElementById("formSection").style.display="none";

let number="987654321"+edu;

let data="";

if(edu==9){

data+=card("Delivery Associate","LocalMart","22, Circular Road, Saharanpur","10 openings",number);

data+=card("Sales Executive","Saharanpur Electronics","Shop No. 12, Main Market, Sarai Road, Saharanpur","3 openings",number);

data+=card("Receptionist","City Hospital","21/B, Civil Lines, Saharanpur","2 openings",number);

}

else if(edu==10){

data+=card("Office Assistant","Sharma Enterprises","56, Nehru Colony, Saharanpur","2 openings",number);

data+=card("Customer Support Rep","CallHub Services","45, IT Park, Saharanpur","6 openings",number);

}

else if(edu==11){

data+=card("Graphic Designer","Creative Studio","2nd Floor, City Center Mall, Saharanpur","2 openings",number);

}

else if(edu==8){

data+=card("Data Entry Operator","ABC Solutions","Plot No. 101, Industrial Area, Saharanpur","2 openings",number);

}

else if(edu==12){

data+=card("Accountant","Mittal & Sons Finance","15/A, Gandhi Chowk, Saharanpur","1 opening",number);

data+=card("Field Sales Manager","Gupta Agro Products","19, Agriculture Market, Nakur, Saharanpur","18 openings",number);

data+=card("Teacher","Shishu Mandir School","Plot No. 5, Shastri Nagar, Saharanpur","3 openings",number);

data+=card("Marketing Executive","Jindal Pvt. Ltd.","Industrial Estate, Rampur Road, Saharanpur","3 openings",number);

}

document.getElementById("jobsContainer").innerHTML=data;

}



function card(title,company,address,openings,number){

return `

<div class="card">

<div>

<b>${title}</b><br>

${company}<br>

${address}<br>

${openings}

</div>

<div class="buttons">

<a href="tel:${number}">
<button class="call">📞</button>
</a>

<a href="https://wa.me/91${number}">
<button class="whatsapp">💬</button>
</a>

</div>

</div>

`;

}                       