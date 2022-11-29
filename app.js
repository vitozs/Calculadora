function calcular(acao, valor){
    console.log(acao, valor)

    if(acao === 'calc'){
        document.getElementById('tela').value+=valor
    }

    if(acao === 'act'){
        document.getElementById('tela').value+=valor
    }

    if(valor === 'C'){
        document.getElementById('tela').value=''

    }


  

}

function result(){
    let resultado = eval(document.getElementById('tela').value)
    document.getElementById('tela').value = resultado

    if(resultado === undefined){
        document.getElementById('tela').value = ''
    }

}