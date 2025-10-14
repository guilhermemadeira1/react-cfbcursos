/*
Ciclo de vida dos componentes

Montagem (Mounting)        -> Quando o componente é renderizado pela primeira vez no virtual DOM.
Atualização (Update)       -> Quando algum estado é atualizado e o componente é re-renderizado.
Desmontagem (Unmounting)   -> Quando o compontes é removido do virtual DOM dinamicamente.

Tratamento de erro/error bundary (opcional) -> Error boundary usa um componente que captura e trata erros de componentes filhos
e sobrescreve os métodos getDeviredStateFromError e componentDidCatch.

Em componentes funcionais, o react usa hooks como useEffect para gerenciar o ciclo de vida.
Em componentes de classe, o react usa um conjunto de métodos:

Mounting:

1º constructor()                      -> instancia o componente e recebe as props como parâmetros
2º static getDerivedStateFromProps()  -> sincroniza os estados passados via props
3º render()                           -> retorna o jsx renderizado pela aplicação
4º componentDidMount()                -> executa uma operação depois de ser renderizado 

Update:

1º static getDerivedStateFromProps()   -> sincroniza os estados passados via props
2º shouldComponentUpdate()             -> testa a condição de renderização
3º render()                            -> renderiza novamente
4º getSnapshotBeforeUpdate()           -> retorna os estados e props anteriores para o componentDidUpdate 
5º componentDidUpdate()                -> executa uma operação depois de atualizado

Unmounting:

1º componentWillUnmount()  -> executa uma operação antes de ser desmontado.

*/