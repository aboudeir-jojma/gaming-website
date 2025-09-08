import TermsPage from '../../terms';

export async function getStaticProps(context) {
  const locale = context.params?.locale || 'en';
  const termsProps = await import('../../terms').then(mod => mod.getStaticProps({ locale }));
  return termsProps;
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

export default TermsPage;
