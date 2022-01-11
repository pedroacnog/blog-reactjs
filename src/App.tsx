import { GlobalStyle } from './styles/global'

import Header from '../src/Components/Header'
import NewsList from '../src/Components/NewsList'

function App() {
  return (
    <>
      <Header/>
      <NewsList/>
      <GlobalStyle/>
    </>
  );
}

export default App;
