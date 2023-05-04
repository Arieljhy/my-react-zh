import LoginForm from "./components/LoginForm";
// import SwitchDark from "@/components/SwitchDark";
import logo from "@/assets/images/logo.png";
import "./index.less";

const Login = () => {
	return (
		<div className="login-container">
			{/* <SwitchDark /> */}
			<div className="login-box">
				<div className="login-left">
					{/* <img src={loginLeft} alt="login" /> */}
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<div className="login-text">有问题 就会有答案</div>
					
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
