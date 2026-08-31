import { useContext, useState } from "react";
import { toast } from "sonner";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContext";

const LoginForm = ({ onClose }) => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleLoginIn = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 3) {
      toast.error("Please enter your full name");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("invalid email please change it");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("password must be more than 8 characters");
      return;
    }

    toast.success("data saved correctly");
    login({
      name: formData.name,
      email: formData.email,
    });
    setFormData({
      email: "",
      name: "",
      password: "",
    });
    onClose();
  };
  return (
    <>
      <StyledWrapper className="bg-white/15 px-15 py-10 rounded-md ">
        <form className="form" onSubmit={handleLoginIn}>
          <span className="input-span">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </span>
          <span className="input-span">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </span>
          <span className="input-span">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </span>

          <button className="submit" type="submit">
            Login
          </button>
        </form>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
  }

  .form .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form input[type="text"], 
  .form input[type="email"],
  .form input[type="password"] {
    border-radius: 0.5rem;
    padding: 1rem 0.75rem;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
  }

  .form input[type="email"]:focus,
  .form input[type="password"]:focus {
    outline: 2px solid var(--clr);
  }

  .form input:focus{
  outline:2px solid var(--clr)
  }

  .label {
    align-self: flex-start;
    color: white ;
    font-weight: 900;
    font-size: 22px;
  }

  .form .submit {
    padding: 1rem 0.75rem;
    width: 100%;
    text-align:center
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .form .submit:hover {
    background-color: oklch(52.7% 0.154 150.069);
    color: white;
  }

  .span {
    text-decoration: none;
    color: var(--bg-dark);
  }

  .span a {
    color: var(--clr);
  }
`;

export default LoginForm;
