import React from 'react';
const DataContext = React.createContext();

function Parent() {
  const [sharedData, setSharedData] = useState('');

  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      <SiblingA />
      <SiblingB />
    </DataContext.Provider>
  );
}

function SiblingA() {
  const { setSharedData } = useContext(DataContext);
  // Use setSharedData
}

function SiblingB() {
  const { sharedData } = useContext(DataContext);
  // Use sharedData
}