const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('.botoes button');




botoes.forEach(function(botao){
    botao.addEventListener('click', function(){
        const valor = botao.dataset.valor;

        if (valor ==='limpar') {
            visor.value = ''

        } else if(valor ==='igual') {
            if(visor.value ==='') return;

            if(/[+\-*/]$/.test(visor.value)) {
                visor.value = 'Erro'
                return
            }

            if(visor.value.includes('/0')) {
                visor.value = 'Erro'
                return
            }

            visor.value = eval(visor.value);
        } else {
            visor.value += valor;
        }
        
    });
});