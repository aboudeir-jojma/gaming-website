import PrivacyPage from '../../privacy';

export async function getStaticProps(context) {
  const locale = context.params?.locale || 'en';
  const privacyProps = await import('../../privacy').then(mod => mod.getStaticProps({ locale }));
  return privacyProps;
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

export default PrivacyPage;
