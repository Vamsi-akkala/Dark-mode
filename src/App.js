import { useState } from 'react';
import './App.css';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Switch from '@material-ui/core/Switch';

function App() {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div className={!mode ? 'app' : 'appDark'}>
      <div className="switchMode">
        <div className="items">
          <WbSunnyIcon
            className={!mode && 'shiningSun'}
          />
          <Switch
            color="primary"
            onChange={handleMode}
          />
          <Brightness2Icon
            className={mode && 'darkMoon'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
