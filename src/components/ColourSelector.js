import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background,classname,label } = config;
  return (
    <button className={classname}
    data-testid={key}
     onClick={() => selectNextBackground({background})}
     style={{backgroundColor:background,
      color:"white",
      cursor:"pointer",
      margin:"5px",
      padding:"10px 20px"}}
     >
      {label}
    </button>
  )
}
export default ColourSelector;
