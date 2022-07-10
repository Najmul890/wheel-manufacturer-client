import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <Navbar style={{backgroundColor:"#4b6584"}} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Wheel Manufacturing LTD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/myPortfolio">My Portfolio</Nav.Link> */}

                    </Nav>
                    <Nav>
                        {
                            user && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }
                        {
                            user && <p style={{color:"white"}} className='mt-2 me-2'>{user.displayName}</p>
                        }
                        {
                            user ? <button style={{backgroundColor:"#2bcbba", color:"white"}} className='btn' onClick={handleSignOut} >Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;