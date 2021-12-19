import { Link } from "react-router-dom";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import RegisterCard from "../../Components/RegisterCard/RegisterCard";

import classes from "./Login.module.scss";

const Login = () => {
  return (
    <FulscrnWrpr
      className={classes.Login}
      containerClassName={classes.container}
    >
      <div className={classes.contents}>
        <h2>تسجيل الدخول</h2>
        <RegisterCard
          title={"registerCardTitle.1"}
          telPrefix={"telPrefix"}
          telPattern={"telPattern"}
          telMaxLength={7}
          telPlaceHolder={"telPlaceHolder.1"}
          submitLabel={"registerButtonLabel.1"}
          providers={[]}
          provider={undefined}
          onSelectChange={undefined}
          terms={null}
          tel={"tel"}
          // onChange={setTel}
          // onSubmit={verifyTel}
          // enriched={enriched}
        />
      </div>
    </FulscrnWrpr>
  );
};

export default Login;
