import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  const { pathname } = history.location;

  useEffect(() => {
    const { onParentNavigate} = mount(ref.current, {
      initialPath: pathname, 
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={ref}></div>
  );
};

