// typings.d.ts
declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

// For SVG
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

