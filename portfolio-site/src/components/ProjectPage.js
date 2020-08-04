import React from 'react';


const ProjectPage = (props) => (
    <div>
      <h3>This is my project page with ProjectID:{props.match.params.id}</h3>
    </div>
  );

  export default ProjectPage;