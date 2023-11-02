const form = document.getElementById('form-agenda');
const contatos = {}; 

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome');
    const inputTelefoneAgenda = document.getElementById('telefone');

    const nome = inputNomeAgenda.value;
    const telefone = inputTelefoneAgenda.value;

    if (contatos[telefone]) {
        const mensagemErro = 'Este número de telefone já existe na lista. Por favor, insira um número diferente.';
        window.alert(mensagemErro);
        return; 
    }

    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${telefone}</td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

    inputNomeAgenda.value = '';
    inputTelefoneAgenda.value = '';

    
    contatos[telefone] = true;
});
