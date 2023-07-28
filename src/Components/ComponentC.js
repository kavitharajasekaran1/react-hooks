import React, {useContext} from 'react';
import ComponentE from './ComponentE';

import { UserContext,ChannelContext } from '../App';

function ComponentC() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} is a {channel}
    </div>
  );
}

export default ComponentC;
