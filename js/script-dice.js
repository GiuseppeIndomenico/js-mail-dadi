const btnPlay = document.getElementById('play')
const result = document.getElementById('result')

btnPlay.addEventListener('click', play)

function play() {
    let userResult = Math.floor(Math.random() * 6) + 1;

    let aiResult = Math.floor(Math.random() * 6) + 1;

    if (userResult > aiResult) {

        result.innerHTML =
            `
    <div class="mt-5 gi-card card text-dark d-flex justify-content-center align-items-center">
    <div class="card-header fw-bold">Risultato</div>
    <div class="card-body">

        <div class="row gi-result align-items-center justify-content-center">

            <div class="col-6 text-center">
                <h5>risultato giocatore</h5>
                <h3 class="fs-1 fw-bold"> ${userResult} </h3>
            </div>
            <div class="col-6 text-center">
                <h5>risultato IA</h5>

                <h3 class="fs-1 fw-bold">  ${aiResult} </h3>
            </div>
        </div>




    </div>
    </div>
    <h1 class="m-5 text-danger">Vince il Giocatore!</h1> 
    `
    }

    else if (userResult < aiResult) {
        result.innerHTML =

        `
    <div class="mt-5 gi-card card text-dark d-flex justify-content-center align-items-center">
    <div class="card-header fw-bold">Risultato</div>
    <div class="card-body">

        <div class="row gi-result align-items-center justify-content-center">

            <div class="col-6 text-center">
                <h5>risultato giocatore</h5>
                <h3 class="fs-1 fw-bold">  ${userResult}</h3>
            </div>
            <div class="col-6 text-center">
                <h5>risultato IA</h5>

                <h3 class="fs-1 fw-bold">  ${aiResult} </h3>
            </div>
        </div>




    </div>
     </div>
        <h1 class="m-5 text-danger">Vince l'IA!</h1>
    
    `
    }

    else {
        result.innerHTML =

        `
        <div class="mt-5 gi-card card text-dark d-flex justify-content-center align-items-center">
        <div class="card-header fw-bold">Risultato</div>
        <div class="card-body">
    
            <div class="row gi-result align-items-center justify-content-center">
    
                <div class="col-6 text-center">
                    <h5>risultato giocatore</h5>
                    <h3 class="fs-1 fw-bold">  ${userResult}</h3>
                </div>
                <div class="col-6 text-center">
                    <h5>risultato IA</h5>
    
                    <h3 class="fs-1 fw-bold"> ${aiResult} </h3>
                </div>
            </div>
    
    
    
    
        </div>
         </div>
            <h1 class="m-5 text-danger">Pareggio!</h1>
        `
    }
    





}


