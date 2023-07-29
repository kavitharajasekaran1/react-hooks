import React, { Children } from 'react';

function Button({handleClick, children}) {
    console.log(`Redning button - ${children}`)
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
