import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';

const AppleLogo = () => {
  return (
    <Svg width="59" height="60" viewBox="0 0 65 60">
          {/* White Circle */}
    <Circle cx="24" cy="24" r="24" fill="white" />
    
      {/* Black Path (Apple Logo) */}
      <Path
        d="M19.5 20C19.5 22.7614 17.7614 25 15 25C12.2386 25 10.5 22.7614 10.5 20C10.5 17.2386 12.2386 15 15 15C17.7614 15 19.5 17.2386 19.5 20Z"
        fill="#000"
      />
    </Svg>
  );
};

export default AppleLogo;