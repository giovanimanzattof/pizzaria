
function enviar(event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('phone').value;
    const mensagem = document.getElementById('message').value;
    const tele = '19995937457'
    
    const text = `Olá! Me Chamo ${nome}, ${mensagem}. Meu email e ${email} e meu telefone e ${telefone}`
    const msgformatada = encodeURIComponent(text)
    const link = `https://wa.me/${tele}?text=${msgformatada}`

    window.open(link, '_blank')
}




