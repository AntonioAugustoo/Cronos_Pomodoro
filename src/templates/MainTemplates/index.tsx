import { Container } from "../../components/Container/index.tsx";
import { Footer } from "../../components/Footer.tsx/index.tsx";
import { Logo } from "../../components/Logo/index.tsx";
import { Menu } from "../../components/Menu/index.tsx";

type MainTamplatesProps = {
  children: React.ReactNode;
}


export function MainTemplates({ children }: MainTamplatesProps){
return (
 <>
<Container>
 <Logo />
 </Container>

<Container>
  <Menu />
 </Container>

   {children}

         <Container>
        <Footer />
      </Container>
    </>
  );  
}

