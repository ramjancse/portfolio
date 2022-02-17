import Container from '@mui/material/Container';
import './App.css';
import ApppBar from './components/ApppBar';
import Bannar from './components/Bannar';
import ClientLogo from './components/ClientLogo';
import Email from './components/Email';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Query from './components/Query';
import Services from './components/Services';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <Container maxWidth="xl">
      <ApppBar />
      <Bannar />
      <Query />
      <Services />
      <Subscribe />
      <Feedback />
      <ClientLogo />
      <Email />
      <Footer />
    </Container>
  );
}

export default App;
