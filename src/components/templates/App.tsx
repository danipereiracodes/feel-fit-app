import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import MainContent from '../organisms/MainContent';

function App() {
  return (
    <section className='grid grid-cols-1 grid-rows-feelFitLayout bg-gray-700'>
      <Header />
      <MainContent />
      <Footer />
    </section>
  );
}

export default App;
