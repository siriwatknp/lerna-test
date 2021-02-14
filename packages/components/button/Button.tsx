import React from "react";

const Button = ({ children }: React.PropsWithChildren<{}>) => (
  <button>{children} hello</button>
);

export default Button;
