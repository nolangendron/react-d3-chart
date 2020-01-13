import React, { useRef, useState, useEffect } from 'react';

const ReactDimensions = React.createContext(null);

export const Provider = (props) => {
  const domNode = useRef(null);
  const [dimensions, setDimensions] = useState({});
  const [timeoutID, newTimeoutID] = useState(0);

  const getNodeDimensions = () => {
    clearTimeout(timeoutID);
    newTimeoutID(setTimeout(() => {
      setDimensions(domNode.current.getBoundingClientRect())
    }, 300)
    );
  };

  useEffect(() => {
    window.addEventListener('resize', getNodeDimensions);
    return () => { window.removeEventListener('resize', getNodeDimensions) };
  }, []);

  return (
    <div ref={domNode} style={{ height: '100%' }}>
      <ReactDimensions.Provider value={dimensions}>
        {props.children}
      </ReactDimensions.Provider>
    </div>
  )
};

export const withContext = (ChildComponent) => {
  return (props) => (
    <ReactDimensions.Consumer>
      {(incomingDimensions) => (<ChildComponent {...props} dimensions={incomingDimensions} />)}
    </ReactDimensions.Consumer>
  )
};

