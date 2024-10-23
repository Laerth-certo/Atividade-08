"use client";

import Pagina from "../components/Pagina";
import { Table } from "react-bootstrap";

export default function ListaImovelPage() {
  const Imovel = JSON.parse(localStorage.getItem("imovel")) || [];

  console.log(Imovel);

  return (
    <Pagina titulo={"Lista de Imovel"}>
      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>Proprietario</th>
            <th>Tipo</th>
            <th>Finalidade</th>
            <th>Valor</th>
            <th>Foto</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {Imovel.map((item) => (
            <tr>
              <td>{item?.proprietario?.nome}</td>
              <td>{item.tipo}</td>
              <td>{item.finalidade}</td>
              <td>
                <p>R$ {item.valor}</p>
              </td>
              <td className="text-center">
                <img src={item.foto} width={200} />
              </td>
              <td>{item.descricao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
