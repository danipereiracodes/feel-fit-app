import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <section className='grid grid-cols-1 grid-rows-feelFitLayout h-screen'>
      <Header />
      <MainContent />
      <Footer />
    </section>
  );
}

export default App;
