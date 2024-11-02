
function sendAppointmentData() {
    
 
    
    const whatsappNumber = '+923435344153';
 
    let user_doctor = document.getElementById('userDoctor').value;
    let user_name = document.getElementById('userName').value; 
    let user_email = document.getElementById('userEmail').value;
    let user_date = document.getElementById('userDate').value;
    let user_time = document.getElementById('userTime').value;
    
    const whatsappMessage = `Appointment Details:
    Doctor: ${user_doctor}
     Name: ${user_name}
     Date: ${user_date}
     Time: ${user_time}
     Email: ${user_email}`;

    
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
};



 


function  sendInformation(){

    var nameOfUser= document.getElementById('name_user').value;
    var messageOfUser= document.getElementById('message_user').value;
    var mailOfUser= document.getElementById('mail_user').value;
    var subjectOfUser= document.getElementById('subject_user').value;

     let  userMessage = "Name:"+nameOfUser+ "/n" + "Subject:"+ "/n" +subjectOfUser;



     const encodedMessage = encodeURIComponent(userMessage);

     window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

};

function close_popup(){
     close_pop=document.getElementById('close').style.display="none";
}

