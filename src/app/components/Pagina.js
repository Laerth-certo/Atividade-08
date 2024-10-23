"use client";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

// titulo, children ->> props
export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Acessar Lista" id="basic-nav-dropdown">
              <NavDropdown.Item href="/lista-imoveis">
                Lista de Imóvel
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Titulo */}
      <div className="bg-primary text-center text-white py-3">
        <h1>{props.titulo}</h1>
      </div>

      {/* Conteudo da Página */}
      <Container className="mt-2">{props.children}</Container>
    </>
  );
}
