import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Preview from './components/Preview';

function App() {
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [educations, setEducations] = useState([]);
  const [works, setWorks] = useState([]);

  return (
    <>
      <Form
        info={info}
        setInfo={setInfo}
        educations={educations}
        setEducations={setEducations}
        works={works}
        setWorks={setWorks}
      />
      <Preview info={info} educations={educations} works={works} />
    </>
  );
}

export default App;
