import Navbar from "../components/Navbar";

function LoginSignUp() {
  return (
    <>
      <Navbar />
      <div>
        <p className="title">Registration Form</p>

        <form className="A">
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
      </div>
    </>
  );
}
export default LoginSignUp;
