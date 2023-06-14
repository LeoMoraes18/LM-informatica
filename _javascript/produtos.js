var produtos = [];

    produtos.push ({
        nome: "Capinha", 
        preco: "R$ 10,00", 
        descricao: "Capinha para celular"
    });
    produtos.push ({
        nome: "Fone de ouvido",
        preco: "R$ 50,00",
        descricao: "Fone de ouvido com cancelamento de ruído"
    });
    produtos.push ({
        nome: "Película protetora",
        preco: "R$ 5,00",
        descricao: "Película protetora para tela de celular"
    });
    produtos.push ({
        nome: "Carregador",
        preco: "R$ 20,00",
        descricao: "Carregador rápido para celular"
    });
    produtos.push ({
        nome: "Bateria externa",
        preco: "R$ 30,00",
        descricao: "Bateria externa portátil para recarregar o celular"
    });
    produtos.push ({
        nome: "Cabo USB",
        preco: "R$ 8,00",
        descricao: "Cabo USB para carregamento e transferência de dados"
    });
    produtos.push ({
        nome: "Carregador sem fio",
        preco: "R$ 40,00",
        descricao: "Base de carregamento sem fio para celulares compatíveis"
    });
    produtos.push ({
        nome: "Caixa de som Bluetooth",
        preco: "R$ 60,00",
        descricao: "Caixa de som portátil com conexão Bluetooth"
    });
    produtos.push ({
        nome: "Filme de vidro",
        preco: "R$ 12,00",
        descricao: "Película de vidro temperado para proteger a tela do celular"
    });
    produtos.push ({
        nome: "Cabo HDMI",
        preco: "R$ 15,00",
        descricao: "Cabo HDMI para conectar o celular à TV"
    });
    produtos.push ({
        nome: "Carregador veicular",
        preco: "R$ 25,00",
        descricao: "Carregador para uso no carro"
    });
    produtos.push ({
        nome: "Fone de ouvido sem fio",
        preco: "R$ 80,00",
        descricao: "Fone de ouvido Bluetooth sem fio"
    });
    produtos.push ({
        nome: "Cartão de memória",
        preco: "R$ 30,00",
        descricao: "Cartão de memória para expansão de armazenamento"
    });
    produtos.push ({
        nome: "Adaptador de tomada",
        preco: "R$ 15,00",
        descricao: "Adaptador de tomada para carregador de celular"
    });
    produtos.push ({
        nome: "Suporte veicular",
        preco: "R$ 20,00",
        descricao: "Suporte para celular no carro"
    });
    produtos.push ({
        nome: "Cabo USB-C",
        preco: "R$ 10,00",
        descricao: "Cabo USB-C para carregamento e transferência de dados"
    });
    produtos.push ({
        nome: "Power bank",
        preco: "R$ 50,00",
        descricao: "Carregador portátil para recarregar o celular em movimento"
    });
    produtos.push ({ 
        nome: "Fone de ouvido com fio", 
        preco: "R$ 30,00", 
        descricao: "Fone de ouvido com fio para celular"
    });
    produtos.push ({
        nome: "Carregador wireless", 
        preco: "R$ 35,00", 
        descricao: "Carregador sem fio para celulares compatíveis"
    });
    produtos.push ({
        nome: "Capa de carregamento", 
        preco: "R$ 25,00", 
        descricao: "Capa de carregamento para iPhone"
    });
    produtos.push ({
        nome: "Caixa de som portátil", 
        preco: "R$ 70,00", 
        descricao: "Caixa de som portátil com bateria recarregável"
    });


var lista = document.getElementById("listaProdutos");
var campoFiltro = document.getElementById("filtro");

function carregaLista(dados) {
    var tabela = document.getElementById("tabelaProdutos");
    tabela.innerHTML = "";

    // Cabeçalho da tabela
    var cabecalho = tabela.createTHead();
    var linhaCabecalho = cabecalho.insertRow();
    linhaCabecalho.innerHTML = "<th>Nome</th><th>Preço</th><th>Descrição</th>";

    // Corpo da tabela
    var corpoTabela = tabela.createTBody();
    dados.forEach(elemento => {
        var linha = corpoTabela.insertRow();
        linha.innerHTML = "<td>" + elemento.nome + "</td>"
            + "<td>" + elemento.preco + "</td>"
            + "<td>" + elemento.descricao + "</td>";
    });
}

carregaLista(produtos);

function filtrar(){
   let filtrado = produtos.filter( produtos => {
        return (
            produtos.nome.toLowerCase().includes(campoFiltro.value.toLowerCase())
            || produtos.preco.toLowerCase().includes(campoFiltro.value.toLowerCase())
            || produtos.descricao.includes(campoFiltro.value)
        );

   });
    carregaLista(filtrado);
}
