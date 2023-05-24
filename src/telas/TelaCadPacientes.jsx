import FormPaciente from "../formularios/FormPaciente";
import { Container, Alert } from "react-bootstrap";
import listPacients from "../dadosMock/dadosPaciente";
import TablePacients from "../tabelas/TabelaPacientes";
import { useState } from "react";
import Pagina from "../templates/Pagina"

export default function TelaCadPacientes(props) {

    const [showTable, setShowTable] = useState(true);
    const [pacients, setPacients] = useState(listPacients)

    function changeValueOnClick() {
        setShowTable(!showTable)
    }


    return (

        <Pagina>
            <Container className="border m-6">
                <Alert variant={"secondary"} className="text-center m-3">
                    <font size="6"><strong>Cadastro de Pacientes</strong></font></Alert>

                {showTable ?
                    <TablePacients
                        listPacientsParams={pacients}
                        setPacients={setPacients}
                        changeScreen={changeValueOnClick}
                    /> :
                    <FormPaciente
                        listPacients={pacients}
                        changeScreen={changeValueOnClick}
                        setPacients={setPacients}
                    />}

            </Container>
        </Pagina>

    );
}


