
import Routes from './Route';
import './assets/css/index.css';
import { ThemeProvider } from 'react-bootstrap';

function App() {
  return(
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} >
      <div className="App">
          <Routes/>
      </div>
    </ThemeProvider>
  )
}

export default App;
