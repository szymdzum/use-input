import { Link } from "react-router";

export const ResetPasswordUrl = () => {
  return (
   <Link to="/reset" className="resetPasswordLink">
      Forgot password?
    </Link>
  );
};

ResetPasswordUrl.displayName = "ResetPasswordUrl";