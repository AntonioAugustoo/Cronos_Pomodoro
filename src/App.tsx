import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider.tsx';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter/index.tsx';

import './styles/theme.css'
import './styles/global.css'





export function App(){
   
return(
    <TaskContextProvider> 
    <MessagesContainer>
    <MainRouter />

      </MessagesContainer>
  </TaskContextProvider>
)
}

