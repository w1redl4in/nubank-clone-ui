interface Line {
  title: string;
  links: string[];
  hasTiltedArrow?: React.ReactNode;
  hasArrow?: React.ReactNode;
}

const FirstLine: Line[] = [
  {
    title: 'Nubank',
    links: [
      'Sobre nós',
      'Carreiras',
      'Perguntas frequentes',
      'Contato',
      'Imprensa',
    ],
  },
  {
    title: 'Produtos',
    links: [
      'Conta digital',
      'Cartão de crédito',
      'Rewards',
      'Empréstimo',
      'Conta PJ',
    ],
  },
  {
    hasTiltedArrow: true,
    title: 'Explore',
    links: [
      'Comunidade',
      'Blog',
      'Newsletter',
      'México',
      'Argentina',
      'Colômbia',
    ],
  },
  {
    hasArrow: true,
    title: 'Veja também',
    links: ['Auxílio Emergencial e FGTS', 'Tudo sobre o Pix'],
  },
];

const SecondLine = [
  {
    title: 'Transparência',
    links: [
      'Política de Privacidade',
      'Política de Compliance',
      'Contratos',
      'Política de Segurança',
      'Relatórios Financeiros',
      'Ética & Compliance',
      'Dados Abertos',
      'SCR',
    ],
  },
  {
    title: 'Ouvidoria',
    links: [
      '0800 887 0463',
      'ouvidoria@nubank.com.br',
      'Atendimento das 9h às 18h (dias úteis)',
    ],
  },
  {
    title: 'Fale com a gente',
    links: ['0800 608 6236', 'meajuda@nubank.com.br', 'Atendimento 24h'],
  },
  {
    title: 'Baixe o app',
    links: ['Auxílio Emergencial e FGTS', 'Tudo sobre o Pix'],
  },
];

export { FirstLine, SecondLine };
