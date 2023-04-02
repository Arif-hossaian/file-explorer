import React, { useState } from 'react';
import Folder from './components/Folder';
import FileData from './folderData';
import useTraverseTree from './hooks/useTraverseTree';

const App = () => {
  const [explorerData, setExplorarData] = useState(FileData);
  console.log(explorerData);
  const { insertNode } = useTraverseTree();
  const handleInsert = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorarData(finalTree);
  };
  return (
    <div>
      <Folder handleInsert={handleInsert} explorerData={explorerData} />
    </div>
  );
};

export default App;
