import React from 'react';
import { withContext } from './ReactDimensions'

const styles = {
  height: '100%',
  backgroundColor: 'red'
}

const ReactNode = ({ dimensions }) => {
  return (
    <div style={styles}>
      width~{dimensions.width}__ height~{dimensions.height}
    </div>
  )
};

export default withContext(ReactNode);