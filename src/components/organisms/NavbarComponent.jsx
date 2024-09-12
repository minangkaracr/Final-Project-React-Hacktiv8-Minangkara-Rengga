import {Navbar, Container, Offcanvas, Nav, Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavbarComponent() {
    const [searchValue, setSearchValue] = useState(''); // State variable to store search input
    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${searchValue}`);
    }

    const handleSearchChange = (event) => {
        const newValue = event.target.value;
        setSearchValue(newValue);
    };
    return (
        <>
            <Navbar expand="md" className="bg-warning mb-3 sticky-top">
                <Container>
                    <Navbar.Brand href="/"><strong>DBMovie</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            <strong>DBMovie</strong>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/trending">Trending</Nav.Link>
                            {/* <Nav.Link href="/movies">Movies</Nav.Link> */}
                            {/* <Nav.Link href="/tvseries">TV Series</Nav.Link> */}
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSearchSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchValue} 
                                onChange={handleSearchChange}
                            />
                            <Button variant="dark" type='submit'>Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}