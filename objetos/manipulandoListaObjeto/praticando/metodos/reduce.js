const imoveis = [
  {
    id: 1,
    finalidade: 'Residencial',
    tipo: 'Casa',
    valor_venda: '500.000,00',
    valor_aluguel: '2.500,00',
    endereco: 'Rua 1, 123',
  },
  {
    id: 2,  
    finalidade: 'Comercial',
    tipo: 'Loja',
    valor_venda: '300.000,00',
    valor_aluguel: '1.500,00',
    endereco: 'Rua 2, 456',
  },
  {
    id: 3,
    finalidade: 'Residencial',
    tipo: 'Apartamento',
    valor_venda: '400.000,00',
    valor_aluguel: '2.000,00',
    endereco: 'Rua 3, 789',
  },
  {
    id: 4,
    finalidade: 'Comercial',
    tipo: 'Loja',
    valor_venda: '200.000,00',
    valor_aluguel: '1.000,00',
    endereco: 'Rua 4, 321',
  },
  {
    id: 5,
    finalidade: 'temporada',
    tipo: 'Casa',
    valor_venda: '600.000,00',
    valor_aluguel: '3.000,00',
    endereco: 'Rua 5, 901',
  }
]

const imoveisFinalidade = imoveis.reduce((acc, imovel) => {
  acc[imovel.finalidade] = (acc[imovel.finalidade] || 0) + 1;
  return acc;
}, {});

console.log(imoveisFinalidade);
