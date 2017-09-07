import React from 'react';

import SideBar from '../shared/SideBar';

export default function ProfilePage(props) {
  const { match } = props; // match is from router which contains information about the route
  return (
    <div className="row">
      <div className="col-sm-12 col-md-8">
        This is the profile page. the profile id is {match.params.id}
      </div>
      <SideBar />
    </div>
  );
}
