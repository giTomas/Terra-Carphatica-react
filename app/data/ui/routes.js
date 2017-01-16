const routes = [
  {
    pattern: '/',
    name: 'Úvod',
    component: 'Uvod',
    exactly: true,
  },
  {
    pattern: '/o-nas',
    name: 'O nás',
    component: 'ONas',
    exactly: false,
  },
  {
    pattern: '/sekcie',
    name: 'Sekcie',
    component: 'Sekcie',
    exactly: false,
  },
  {
    pattern: '/app/assets/docs/stanovy.pdf',
    name: 'Stanovy',
    exactly: false,
  },
  {
    pattern: '/kontakt',
    name: 'Kontakt',
    component: 'Kontakt',
    exactly: false,
  },
];


export default routes;
