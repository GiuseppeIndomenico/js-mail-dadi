

const tutorMail = [
    'cleliafradella@boolean.it',
    'marcoacciari@boolean.it',
    'samuelpanicucci@boolean.it'
];


const checkBtn = document.getElementById('checkBtn')
const check = document.getElementById('check')

let mail;



//console.log(checkBtn)

checkBtn.addEventListener('click', checkMail)

function checkMail(e) {

    e.preventDefault();

    let mail = document.getElementById('mail').value
    let tutor = ''

    for (let i = 0; i < tutorMail.length; i++) {

        console.log(mail)
        console.log(tutorMail[i])

        let tutor = tutorMail[i]

    }
    if (tutor) {

        check.innerHTML =

            `
           <h1>Complimenti! Sei un ottimo tutor!</h1>        
           `



    } else {
        check.innerHTML =
            `
            <h1>Chi sei!? e come sei arrivato su questa pagina?</h1>   
            `


    }




}





