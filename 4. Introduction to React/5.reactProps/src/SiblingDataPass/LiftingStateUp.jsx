import React from 'react'

function Parent() {
  const [sharedData, setSharedData] = useState('');

  return (
    <>
      <SiblingA sharedData={sharedData} setSharedData={setSharedData} />
      <SiblingB sharedData={sharedData} />
    </>
  );
}