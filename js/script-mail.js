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
    let mail = document.getElementById('mail').value
    for (let i = 0; i < tutorMail.length; i++){


    
    //    console.log(mail)
        
       // console.log(tutorMail[i])

        if(tutorMail[i] === mail) {

            tutorVerifificato = tutorMail[i];
          
        }
        
    }
    
    if (tutorVerifificato){
        check.innerHTML=
        `<h1 class="text-danger text-center">Benvenuto caro Tutor!</h1>`
        //console.log('verificato');
    }

    else {
        check.innerHTML=

        `<h1 class="text-danger text-center">Chisei!? come sei arrivato su questa pagina!?</h1>`
        //  console.log('non verificato')

    }
    
    




}


//-----------------------------------------------------------------------------------------------







