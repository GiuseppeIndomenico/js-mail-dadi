

const tutorMail= [
    'cleliafradella@boolean.it',
    'marcoacciari@boolean.it',
    'samuelpanicucci@boolean.it'
];


const checkBtn= document.getElementById('checkBtn')

let mail;

console.log(checkBtn)

checkBtn.addEventListener('click', checkMail)

function checkMail (e){

    e.preventDefault();

   let mail= document.getElementById('mail').value

   console.log(mail)


}



for (let i = 0; i< tutorMail.length; i++ ) {

 

}