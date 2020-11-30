import Container from './components/container/index.js'
import Header from './components/header/index.js'
import Row from './components/row/index.js';
import Search from './components/search/index.js'


function App() {
  return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Search />
        </Row>
        <Row>
        
        </Row>
      </Container>
  );
}

export default App;
