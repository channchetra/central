import { useContext } from 'react';
import { useRouter } from 'next/router';
import { SiteContext } from 'hooks/use-site';
import { constructPageMetadata } from 'lib/site';

export default function usePageMetadata({ metadata: pageMetadata }) {
  const context = useContext(SiteContext) || {};
  const { homepage = 'localhost:3000', metadata: defaultMetadata } = context; 
  const router = useRouter();
  const metadata = constructPageMetadata(defaultMetadata, pageMetadata, {
    homepage,
    router,
  });
  return {
    metadata,
  };
}