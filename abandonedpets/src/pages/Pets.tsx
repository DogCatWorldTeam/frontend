import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import PetList from "../components/PetList";

function Pets() {
    return (
        <>
            <NavBar />
            <Search />
            <PetList />
            <Footer />
        </>
    )
}

export default Pets;