
import { useEffect } from "react";
import { Container } from "../../components/Container";
import { CoutDown } from "../../components/CoutDown/index.tsx";
import { MainForm } from "../../components/MainForm/index.tsx";
import { MainTemplates } from "../../templates/MainTemplates";


export function Home() {
    useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);

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