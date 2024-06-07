import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../components/pets/Search';
import DogList from '../components/pets/DogList';

function Dog() {
  return (
    <>
      <NavBar />
      <Search />
      <DogList />
      <Footer />
    </>
  );
}

export default Dog;
