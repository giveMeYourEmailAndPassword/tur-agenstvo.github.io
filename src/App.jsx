import Header from './sections/Header'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import SectionFive from './sections/SectionFive'
import Footer from './sections/Footer'
import ScrollToHashElement from './ScrollToHashElement'
import { ScrollRestoration } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


function App() {
  return (
    <>
      <ScrollToHashElement />

      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Header />
      </ClerkProvider>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
      <ScrollRestoration />

    </>
  )
}

export default App
