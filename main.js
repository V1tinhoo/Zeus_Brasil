console.log(document);
var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var message = dados.get('message')

    console.log(nome, email, turma, motivo, message);
    //Enviar os dados por e-mail//

    /*PARTE 7*//*PARTE DO E-MAILJS*/
    var templateParams = {
        nome: nome,
        message: message,
        turma: turma,
        motivo: motivo,
        email: email,
    };
    
    paragrafo.innerHTML = `
        <b>${nome}</b>, sua mensagem foi enviada com sucesso!
    `
    formulario.append(paragrafo)
    
    emailjs.send('service_bz3z1g9', 'template_sqnlpgj', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
})