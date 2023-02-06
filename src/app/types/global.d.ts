declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.png";
declare module "*.hpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGAttributes<SVGElement>>;
  export default SVG;
}

declare const __IS__DEV: boolean;
declare const __IS__ENG: boolean;
