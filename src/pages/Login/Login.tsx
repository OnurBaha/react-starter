//import React, { useContext } from "react";
import { AuthContext, useAuth } from "../../contexts/authContext";
import { Button } from "semantic-ui-react";

function Login() {

    const authContext = useAuth();
	return <div>
        <Button onClick={() => {
					authContext.setIsAuthenticated(true);
				}}> Giriş Yap</Button>
    </div>;
}

export default Login;