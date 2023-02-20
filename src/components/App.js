import '../App.css';
import Header from './Header';
import Cover from './Cover';
import Imgcontent from './Imgcontent';
import Carouseluse from './Carouseluse';
import Ourwork from './Ourwork';
import Customer from './Customer';
import Award from './Award';
import Card from './Card';
import News from './News';
import Form from './Form';
import Location from './Location';
import Footer from './Footer';

const App = () => {

  return (
    <div className='bgfixed'>
      <Header />
      <Cover/>
      <Imgcontent/>
      <Ourwork/>
      <Carouseluse/>
      <Customer/>
      <Award/>
      <Card/>
      <News/>
      <Form/>
      <Location/>
      <Footer/>
    </div>

  );
};


export default App;
