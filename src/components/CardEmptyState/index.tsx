import Card from "../Card";

import "./style.scss";

const CardEmptyState = (): JSX.Element => (
  <Card className="card-empty-state">
    <p>Nenhum resultado encontrado.</p>
  </Card>
);

export default CardEmptyState;
