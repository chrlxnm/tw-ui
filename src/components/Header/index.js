import { ButtonPrimary, ButtonSecondary } from "components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {ReactComponent as Logout} from 'assets/icons/log-out.svg'
import styled from "styled-components";
import { useAuth } from "contexts/AuthContext";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/");
  const currentSection = path?.length > 1 ? path[1] : "";
  const navigate = useNavigate();

  const goToLoginPage = () => {
    setIsToggleOpen(false);
    navigate("/login", { replace: true });
  };
  const { user, logout } = useAuth();
  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isToggleOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isToggleOpen]);
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link to={"/"} className="nav-logo-link">
            <p className="font-bold text-[28px]">
              <span>Employe</span>
              <span className="text-[#EE2E24]">Corner</span>
            </p>
          </Link>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <Link
              to={"/beranda"}
              className={`nav-menu-list ${
                currentSection === "beranda" && "active"
              }`} onClick={handleToggleOpen}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to={"/riwayat"}
              className={`nav-menu-list ${
                currentSection === "riwayat" && "active"
              }`} onClick={handleToggleOpen}
            >
              Riwayat
            </Link>
          </li>
          <li>
            {" "}
            {user ? (
              <ButtonSecondary onClick={() => logout()} icon={<Logout />} iconPosition="end">
                Logout
              </ButtonSecondary>
            ) : (
              <ButtonPrimary onClick={() => goToLoginPage("/login")}>
                Masuk
              </ButtonPrimary>
            )}
          </li>
        </NavManu>
        {isToggleOpen ? (
          <i
            className="fas fa-times menuToggleBtn"
            onClick={handleToggleOpen}
          ></i>
        ) : (
          <i
            className="fas fa-bars menuToggleBtn"
            onClick={handleToggleOpen}
          ></i>
        )}
      </StyledHeader>
    </>
  );
};

export default Header;


const StyledHeader = styled.header`
  z-index: 99;
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  padding: 10px 80px 8px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: black;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: black;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 36px;

  .active {
    color: #fd4646 !important;
    font-weight: 700 !important;
  }

  li a {
    &:hover {
      cursor: pointer;
      color: #fd4646;
      font-weight: 700;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    height: 100vh;
    text-align: center;

    li button {
      width: 100%;
    }
  }
`;
