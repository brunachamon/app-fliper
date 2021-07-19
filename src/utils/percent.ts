export const formatPercent = (value: number = 0) => new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 3
}).format(value/100);
