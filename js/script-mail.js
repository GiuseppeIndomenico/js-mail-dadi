const tutorMail = [


    'cleliafradella@boolean.it',
    'marcoacciari@boolean.it',
    'samuelpanicucci@boolean.it'
];


const checkBtn = document.getElementById('checkBtn')
const check = document.getElementById('check')

//console.log(checkBtn)

checkBtn.addEventListener('click', checkMail)

function checkMail(e) {

    e.preventDefault();
    let tutorVerifificato = ''
    for (let i = 0; i < tutorMail.length; i++){


        let mail = document.getElementById('mail').value
    
    //    console.log(mail)
        
       // console.log(tutorMail[i])

        if(tutorMail[i] === mail ) {

            tutorVerifificato= tutorMail[i]
         //   console.log('verificato')
        }


    }







}


//-----------------------------------------------------------------------------------------------







