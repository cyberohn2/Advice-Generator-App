const adviceText = document.querySelector('.advice')
window.onload = function () {
//GETTING THE ACTUAL DATA FROM THE API PROVIDED BY FRONTEND MENTOR
    const data = getData()
    data.then( dat =>{
        adviceText.innerHTML = dat.slip.advice;
            document.querySelector('#adviceNo').innerHTML = `#${dat.slip.id}`
            localStorage.setItem("advice", dat.slip.advice)
    } )}

const getData = async function () {
    const response = await  fetch(`https://api.adviceslip.com/advice`)
    const data = await response.json()
    return data
}

const copyBtn = document.querySelector('.copy-btn')
copyBtn.addEventListener('click', () =>{
    navigator.clipboard.writeText(adviceText.innerHTML);
})

const whatsappBtn = document.querySelector('.whatsapp')
whatsappBtn.addEventListener('click', () =>{
    let whatsappLink = `https://api.whatsapp.com/send?text=A friendly Advice - 
    ${adviceText.innerHTML} - 
    Get more at https://cyberohn2.github.io/Advice-Generator-App/`
    window.location.assign(whatsappLink)
})
