import { useState } from 'react';
import './styles/App.css';
import Form from './components/Form';
import Preview from './components/Preview';

function App() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [educations, setEducations] = useState([]);
  const [works, setWorks] = useState([]);

  return (
    <div id="App">
      <Form
        info={info}
        setInfo={setInfo}
        educations={educations}
        setEducations={setEducations}
        works={works}
        setWorks={setWorks}
      />

      <Preview info={info} educations={educations} works={works} />
    </div>
  );
}

export default App;
