alert('sizda hozir random sonlar chiqishni boshlaydi ')
let randomRaqam = Math.round(Math.random(5)*100)

let randomSon =   alert('random orqarli chiqqan son: ' + randomRaqam  ) 

let bolishVaKopaytirish = alert('biz random sonni 2 ga kopaytirib bolmoqchimiz')

let uchgaBolish  = randomRaqam/3 
let davomi =  Math.round(randomRaqam-uchgaBolish) 

console.log( alert(' random orqali chiqqan son  ' + randomRaqam + '  edi                                                      ' 
    +
    `biz uni 2 ga kopaytirib  ${randomRaqam*2}  sonini chiqardik,                                          `
    +
    `va shu sonni 2 ga bolib:  ${ Math.floor(randomRaqam/2) }  sonini chiqardik,                                      `
    +
    `va shu sonni 3 ga bolgandagi qoldiq:  ${davomi} sonini chiqardik   `
)
);
