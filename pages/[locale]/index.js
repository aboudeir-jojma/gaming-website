import HomePage from '../index';

export async function getStaticProps(context) {
  const locale = context.params?.locale || 'en';
  const homeProps = await import('../index').then(mod => mod.getStaticProps({ locale }));
  return homeProps;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'fr' } },
      { params: { locale: 'es' } },
      { params: { locale: 'pt' } },
      { params: { locale: 'de' } },
      { params: { locale: 'it' } },
    ],
    fallback: false,
  };
}

export default HomePage;
