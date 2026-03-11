
import { Container } from "../../components/Container";
import { CoutDown } from "../../components/CoutDown/index.tsx";
import { MainForm } from "../../components/MainForm/index.tsx";
import { MainTemplates } from "../../templates/MainTemplates";


export function Home() {

  return (
    <MainTemplates>
      <Container>
        <CoutDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplates>
  );
}