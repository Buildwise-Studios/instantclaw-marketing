import React from 'react';
import Slide01Cover from './slide-01';
import Slide02Comparison from './slide-02';

// To switch between slides, change the default export below
// export default Slide01Cover; // For Slide 1: Cover
// export default Slide02Comparison; // For Slide 2: Comparison

export default function Home() {
  // Default to Slide 2 (latest working version)
  return <Slide02Comparison />;
}
