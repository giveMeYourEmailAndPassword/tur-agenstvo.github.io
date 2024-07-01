import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour.jsx';
import AboutUs from './about-us/AboutUs.jsx';
import Skazka from './tours/skazka/Skazka.jsx';
import KolTor from './tours/kol-tor/KolTor.jsx';
import IssykKul from './tours/ik/IssykKol.jsx';
import Chunkurchak from './tours/chun-kurchak/ChunKurchak.jsx';
import AlaArcha from './tours/ala-archa/AlaArcha.jsx';
import Arashan from './tours/arashan/Arashan.jsx';
import ContactUs from './contact-us/ContactUs.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />
  },
  {
    path: "/contanctUs",
    element: <ContactUs />
  },
  {
    path: "/Kol-Tor/:month",
    element: <KolTor />
  },
  {
    path: "/Kol-Tor",
    element: <KolTor />
  },
  {
    path: "/Arashan/:month",
    element: <Arashan />
  },
  {
    path: "/Arashan",
    element: <Arashan />
  },
  {
    path: "/Ala-Archa/:month",
    element: <AlaArcha />
  },
  {
    path: "/Ala-Archa",
    element: <AlaArcha />
  },
  {
    path: "/Skazka/:month",
    element: <Skazka />
  },
  {
    path: "/Skazka",
    element: <Skazka />
  },
  {
    path: "/Issyk-Kul/:month",
    element: <IssykKul />
  },
  {
    path: "/Issyk-Kul",
    element: <IssykKul />
  },
  {
    path: "/Chun-kurchak/:month",
    element: <Chunkurchak />
  },
  {
    path: "/Chun-kurchak",
    element: <Chunkurchak />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
