import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'nb-home',
    link: '/pages/dashboard',
  },
  {
    title: 'Geral',
    icon: 'nb-list',
    link: 'pages/forms',
    children: [
      {
        title: 'Administradora',
        link: '/pages/forms/administradora',
      },
      {
        title: 'Condominio',
        link: '#',
      },
      {
        title: 'Unidades',
        link: '#',
      },
      {
        title: 'Proprietários',
        link: '#',
      },
      {
        title: 'Contas Financeiras',
        link: '#',
      },
      {
        title: 'Planos de Contas',
        link: '#',
        children: [
          {
            title: 'Contas de Receita/Despesa',
            link: '#',
          },
          {
            title: 'Contas de Disponibilidade',
            link: '#',
          }
        ]
      },
      {
        title: 'Imobiliárias',
        link: '#',
      },
    ],
  },
  {
    title: 'Configuração',
    icon: 'nb-gear',
    link: '#',
    children: [
      {
        title: 'Configurações Gerais',
        link: '#',
      },
      {
        title: 'Régua de Cobrança',
        link: '#',
      },
      {
        title: 'Instruções de Boleto',
        link: '#',
      },
      {
        title: 'Indices Atualização Monetária',
        link: '#',
      },
      {
        title: 'Assinatura dos Relatórios',
        link: '#',
      },
      {
        title: 'Log de Atividades',
        link: '#',
      },
    ],
  },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
