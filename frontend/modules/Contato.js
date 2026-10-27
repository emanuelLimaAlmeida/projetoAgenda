import validator from 'validator';

export default class Contato {
    constructor(formEnviado) {
        this.form = document.querySelector(formEnviado)
    }
    init() {
        this.events()
        console.log('teste')
    }
    events() {
        if (!this.form) return;

        this.form.addEventListener('submit', e => {
        e.preventDefault();
        // alert('form não enviado');
        this.validate(e)   

        })
    }
    validate(e) {
        const el = e.target;
        let erro = false

        const nomeEnviado = el.querySelector('input[name="nome"]').value
        const sobrenomeEnviado = el.querySelector('input[name="sobrenome"]').value
        const emailEnviado = el.querySelector('input[name="email"]').value
        const telefoneEnviado = el.querySelector('input[name="telefone"]').value

        console.log(nomeEnviado, sobrenomeEnviado, emailEnviado, telefoneEnviado)

        if(typeof nomeEnviado !== "string" || nomeEnviado === "") {
            erro = true;
            alert('nome invalido')
            return
        };
        if(typeof sobrenomeEnviado === ""){
            erro = true;
            alert('sobrenome invalido')
            return
        }
        if(!validator.isEmail(emailEnviado)){
            erro = true;
            alert('e-mail inválido');
        };
        if(telefoneEnviado.length < 7 || telefoneEnviado.length > 15){
            erro = true;
            alert('telefone invalido')
        }
        
        if(!erro) el.submit();
        
    }
}