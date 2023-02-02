import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import '@/styles/tailwind.css'
import 'focus-visible'

// From AWS amplify
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "@/src/ui-components/studioTheme";

import awsconfig from '@/src/aws-exports'

Amplify.configure({...awsconfig, ssr: true});


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
