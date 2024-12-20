declare module '*.svg?react' {
  import React from 'react';

  // Declare the ReactComponent as a React component that accepts SVG props
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}