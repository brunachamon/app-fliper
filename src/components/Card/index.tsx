import { ReactNode } from "react";

import "./style.scss";

interface CardTypes {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = "" }: CardTypes): JSX.Element => (
  <div data-testid="card-component" className={`card ${className}`}>{children}</div>
);

export default Card;
