import "./style.scss";

const Loader = ({
  className = ""
}: LoaderTypes): JSX.Element => (
  <div className="spinner">
    <div className={`spinner--container p-2 ${className}`}>
      <div className="spinner--circle" role="status"></div>
      <div className="spinner--text">Carregando...</div>
    </div>
  </div>
);

interface LoaderTypes {
  className?: string
};

export default Loader;
