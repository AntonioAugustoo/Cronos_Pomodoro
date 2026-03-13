# Cronos Pomodoro

Aplicacao web de produtividade baseada na tecnica Pomodoro, com ciclos de foco e pausa, historico das tarefas, configuracoes personalizadas e interface moderna em React.

## Visao Geral

O Cronos Pomodoro ajuda voce a organizar sessoes de trabalho com foco total e descansos estrategicos.

O projeto oferece:
- Contador regressivo com ciclo automatico de foco e pausas
- Controle de tarefas ativas e historico completo
- Configuracao de tempos (foco, pausa curta e pausa longa)
- Persistencia local de estado
- Confirmacoes e feedbacks visuais
- Navegacao entre paginas com roteamento client-side

## Tecnica Pomodoro (resumo)

A tecnica Pomodoro divide o trabalho em blocos de foco e descanso para melhorar concentracao e reduzir fadiga.

Fluxo aplicado no projeto:
1. Iniciar tarefa de foco
2. Trabalhar durante o tempo configurado
3. Pausar (curta ou longa, dependendo do ciclo)
4. Repetir o ciclo

## Demo Online

O projeto esta publicado na Vercel.

- Deploy: Vercel
- URL de producao: `cronos-pomodoro-rho.vercel.app` 


## Stack Tecnologica

- React 19
- TypeScript
- Vite
- React Router
- React Toastify
- Lucide React (icones)
- date-fns (formatacao de datas)
- Web Worker (timer isolado da UI)
- Context API + Reducer (gerenciamento de estado)

## Arquitetura da Aplicacao

### Frontend
- SPA em React com TypeScript
- Rotas para Home, Historico, Configuracoes, Sobre e NotFound
- Componentizacao com pastas por componente + CSS Modules

### Estado Global
- `TaskContext` centraliza o estado da aplicacao
- `taskReducer` processa acoes (iniciar, interromper, concluir, resetar, alterar configuracoes)
- `taskActions` define tipos de acao e contratos de payload

### Timer com Worker
- O contador roda em `worker` para nao bloquear a thread principal
- `TimerWorkerManager` cria e controla a instancia unica do worker

### Persistencia
- Estado salvo em `localStorage`
- Rehidratacao ao iniciar a aplicacao

### Feedback ao Usuario
- Alertas, erros e confirmacoes via `react-toastify`
- Adapter `showMessage` padroniza exibicao de mensagens

## Estrutura de Pastas

```text
Cronos-Pomodoro/
|- public/
|  `- images/
|- src/
|  |- adapters/
|  |  `- showMessage.ts
|  |- components/
|  |  |- Container/
|  |  |- CoutDown/
|  |  |- Cycles/
|  |  |- DefaultButton.tsx/
|  |  |- Dialog/
|  |  |- Footer.tsx/
|  |  |- GenericHtml/
|  |  |- Heading/
|  |  |- Input.tsx/
|  |  |- Logo/
|  |  |- MainForm/
|  |  |- Menu/
|  |  |- MessagesContainer/
|  |  |- RouterLink/
|  |  `- Tips/
|  |- contexts/
|  |  `- TaskContext/
|  |     |- initialTaskState.ts
|  |     |- taskActions.ts
|  |     |- taskReducer.ts
|  |     |- TaskContext.tsx
|  |     |- TaskContextProvider.tsx
|  |     `- UseTaskContext.ts
|  |- models/
|  |  |- TaskModel.ts
|  |  `- TaskStateModel.ts
|  |- Pages/
|  |  |- Home/
|  |  |- History/
|  |  |- Settings/
|  |  |- AboutPomodoro/
|  |  `- Notfound/
|  |- routers/
|  |  `- MainRouter/
|  |- styles/
|  |  |- global.css
|  |  `- theme.css
|  |- templates/
|  |  `- MainTemplates/
|  |- utils/
|  |  |- FormatDate.ts
|  |  |- FormatSecondsToMinutes.ts
|  |  |- GetNextCycle.ts
|  |  |- GetNextCycleType.ts
|  |  |- getTaskStatus.ts
|  |  |- loadBeep.ts
|  |  `- SortTasks.ts
|  |- workers/
|  |  |- timerWorker.js
|  |  `- timerWorkerManager.ts
|  |- App.tsx
|  `- main.tsx
|- index.html
|- package.json
|- tsconfig.json
|- vite.config.ts
`- README.md
```

## Rotas da Aplicacao

- `/` -> Home (contador + formulario principal)
- `/history/` -> Historico de tarefas
- `/settings/` -> Configuracoes de tempo
- `/about-pomodoro/` -> Pagina explicativa
- `*` -> Pagina 404

## Funcionalidades Principais

- Iniciar tarefa com nome e duracao
- Interromper tarefa em andamento
- Concluir tarefa automaticamente ao zerar o timer
- Tocar beep ao finalizar ciclo
- Ordenar historico por tarefa, duracao e data
- Limpar historico com confirmacao
- Alterar configuracoes de tempo com validacao

## Como Rodar Localmente

### Pre-requisitos
- Node.js 18+ (recomendado 20+)
- npm

### Passos

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`.

## Scripts Disponiveis

- `npm run dev` -> inicia ambiente de desenvolvimento
- `npm run build` -> gera build de producao
- `npm run preview` -> sobe preview da build
- `npm run lint` -> analise de lint

## Qualidade e Organizacao de Codigo

- Tipagem forte com TypeScript
- Separacao por contexto, paginas, componentes e utilitarios
- Reuso de componentes visuais
- Utilitarios puros para formatacao, status e ordenacao


## Autor

Projeto desenvolvido por Antonio Augusto.