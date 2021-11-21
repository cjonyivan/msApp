
//Redux
import store from './store';
import { Provider } from 'react-redux';
import Principal from './components/Principal';

function App() {
  return (
    <Provider store={store}>
      <Principal/>
    </Provider>
  );
}

export default App;
