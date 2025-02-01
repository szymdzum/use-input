import { Link } from "react-router";

export const LinkToRestPassword = () => {
  return (
   <Link to="/reset">
      Forgot password?
    </Link>
  );
};

LinkToRestPassword.displayName = "ForgotPassword";