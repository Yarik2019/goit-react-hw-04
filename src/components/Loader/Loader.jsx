import { Vortex } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.loader}>
      <Vortex height="300" width="300" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
