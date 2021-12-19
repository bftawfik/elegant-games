import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import RegisterCard from "../../Components/RegisterCard/RegisterCard";

import classes from "./Login.module.scss";

const Login = () => {
  return (
    <FulscrnWrpr
      className={classes.Login}
      containerClassName={classes.container}
    >
      <RegisterCard
        title={"تسجيل الدخول"}
        telPrefix={"02"}
        telPattern={"telPattern"}
        telMaxLength={7}
        telPlaceHolder={"telPlaceHolder.1"}
        submitLabel={"sub"}
        providers={[]}
        provider={undefined}
        onSelectChange={undefined}
        terms={null}
        tel={"0127778885"}
        // onChange={setTel}
        // onSubmit={verifyTel}
        // enriched={enriched}
      />
    </FulscrnWrpr>
  );
};

export default Login;
