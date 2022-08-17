import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputName } from './components/InputName';
import { NamesList } from './components/NamesList';

function App() {
  const [name, setName] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);

  const handleNames = async () => {
    const response = await fetch(
      'https://ufla-api-cloud1.lucas-neves.workers.dev/names'
    );

    if (response.status === 200) {
      const _names = await response.json();

      setNames(_names.names);
    }
  };

  const saveName = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name }),
    };

    await fetch(
      'https://ufla-api-cloud1.lucas-neves.workers.dev/names',
      options
    );

    setName('');
    await handleNames();
  };

  useEffect(() => {
    try {
      handleNames();
    } catch {
      setNames([]);
    }
  }, []);

  return (
    <>
      <Header />
      <InputName name={name} setName={setName} saveName={saveName} />
      <NamesList names={names} />
    </>
  );
}

export default App;
