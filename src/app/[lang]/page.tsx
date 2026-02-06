import { getDictionary } from '../../get-dictionary';
import HomeContent from '../../components/home/HomeContent';

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Page({ params }: Props) {
  // await the params in Next.js 15+
  const { lang } = await params;
  
  // Ensure lang is valid
  const validLang = (lang === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const dict = await getDictionary(validLang);

  return <HomeContent dict={dict} lang={validLang} />;
}
