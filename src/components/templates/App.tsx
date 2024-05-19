import Header from '../organisms/Header';
import MainContent from '../organisms/MainContent';

function App() {
  return (
    <section className='app'>
      <div className='app__overlay'></div>
      <Header />
      <MainContent />
    </section>
  );
}

export default App;
