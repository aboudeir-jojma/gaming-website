import AboutPage from '../../about';

export async function getStaticProps(context) {
  const locale = context.params?.locale || 'en';
  const aboutProps = await import('../../about').then(mod => mod.getStaticProps({ locale }));
  return aboutProps;
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

export default AboutPage;
