import React from 'react';
import Slide01Cover from './slide-01';
import Slide02Comparison from './slide-02';
import Slide03DeployForm from './slide-03';

// To switch between slides, change the default export below
// export default Slide01Cover; // Slide 1: Cover
// export default Slide02Comparison; // Slide 2: Comparison
// export default Slide03DeployForm; // Slide 3: Deploy Form

export default function Home() {
  // Current slide
  return <Slide03DeployForm />;
}
