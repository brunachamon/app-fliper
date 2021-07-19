import { useMemo } from "react";
import { useQuery } from "@apollo/client";

import CardEmptyState from "../../components/CardEmptyState";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import OptionsButton from "../../assets/options-button.svg";
import { GET_SUMMARY } from "../../services/summary";
import { formatPercent } from "../../utils/percent";
import { formatMoneyWithCurrency } from "../../utils/currency";

import "./style.scss";

const Dashboard = () => {
  // const { isLoading, hasError, summary = [] } = useSelector((state: RootState) => state.summary)

  const {
    loading: isLoading,
    error: hasError ,
    data: { wealthSummary: summary = [] } = {}
  } = useQuery(GET_SUMMARY);

  const { profitability, gain, cdi, total = 0 } = useMemo(() => (summary[0] || {}), [summary]);

  const renderContent = () => {
    if (hasError) {
      return 'Algo deu errado por aqui. Tente novamente em alguns minutos.';
    };

    if (!summary.length) {
      return (<CardEmptyState />);
    };

    return (
      <>
        <div className="dashboard--summary-card-investiment">
          <strong>Valor investido</strong>
          <h2 className="dashboard--summary-card-title">
            {formatMoneyWithCurrency(total)}
          </h2>
        </div>

        <div className="dashboard--summary-card-details">
          <div>
            Rentabilidade/mês
          </div>
          <div>
            {formatPercent(profitability)}
          </div>
        </div>

        <div className="dashboard--summary-card-details">
          <div>
            CDI
          </div>
          <div>
            {formatPercent(cdi)}
          </div>
        </div>

        <div className="dashboard--summary-card-details">
          <div>
            Ganho/mês
          </div>
          <div>
            {formatMoneyWithCurrency(gain)}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="dashboard">
      <Card className="dashboard--summary-card">
        <div className="dashboard--summary-card-header">
          <h1 className="dashboard--summary-card-title"> Seu resumo </h1>

          <button className="dashboard--summary-card-button">
            <img alt="Opções" src={OptionsButton} />
          </button>
        </div>

        <div className="dashboard--summary-card-body">
          {isLoading ? <Loader /> : renderContent()}
        </div>

        {!isLoading && (
          <div className="dashboard--summary-card-footer">
            <button type="button" onClick={() => console.log('Do something?')}>Ver mais</button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Dashboard;
