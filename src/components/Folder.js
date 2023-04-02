import React, { useState } from 'react';
import explorer from '../folderData';

const Folder = ({ explorerData, handleInsert }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const addNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsert(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorerData.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>📂</button>
            <button onClick={(e) => handleNewFolder(e, false)}>🗄️</button>
          </div>
        </div>
        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 30 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? '📂' : '🗄️'}</span>
              <input
                onKeyDown={addNewFolder}
                className="inputContainer_input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorerData.items.map((expData) => {
            return <Folder key={expData.id} explorerData={expData} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📃{explorerData.name}</span>;
  }
};

export default Folder;
