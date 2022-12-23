import { useState } from 'react';
import './App.css';
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
    <>
      <div className="app_header">FORM</div>

      <Form
        info={info}
        setInfo={setInfo}
        educations={educations}
        setEducations={setEducations}
        works={works}
        setWorks={setWorks}
      />

      <div className="app_header">PREVIEW</div>

      <Preview info={info} educations={educations} works={works} />
    </>
  );
}

export default App;
