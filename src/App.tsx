import './styles/theme.css'
import './styles/global.css'



import { Home } from './Pages/Home/index.tsx';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider.tsx';





export function App(){
   
return(
    <TaskContextProvider> 
    <Home />
  </TaskContextProvider>
)
}

