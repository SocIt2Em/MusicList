import React from 'react';

export default function TestCompont(props) {
  // below is desctructing. we can now use headline count and showCount without props.
  const { headline, count, showCount } = props;

  return (
    <div>
      {/* <h1>React Test Component</h1> */}
      <h1>{headline} xx</h1>
      { showCount ? <p>{count}</p> : null }
    </div>
  );
}
