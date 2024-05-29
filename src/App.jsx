import Header from './sections/Header'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import SectionFive from './sections/SectionFive'
import Footer from './sections/Footer'
import ScrollToHashElement from './ScrollToHashElement'
// import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <ScrollToHashElement />
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  )
}

export default App
