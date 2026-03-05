import './styles/theme.css'
import './styles/global.css'



import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CoutDown } from './components/CoutDown'
import { Input } from './components/Input.tsx'



export function App() {
return (
 <>
<Container>
 <Logo />
 </Container>

<Container>
  <Menu />
 </Container>

      <Container>
        <CoutDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <Input id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

