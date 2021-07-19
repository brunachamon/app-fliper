export const formatMoneyWithCurrency = (value: number = 0) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(value);
