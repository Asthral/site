import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled("header")`
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  z-index: 1000;
`;

const Nav = styled("div")`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled("div")`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export default function Header() {
  return (
    <HeaderContainer>

      <Nav>

        <h2>⚙ Parcours</h2>

        <Links>
          <a href="#solution">Solution</a>
          <a href="#valeur">Apports</a>
          <a href="#contact">Contact</a>

          <Button variant="contained" color="warning">
            Demander une démo
          </Button>

        </Links>

      </Nav>

    </HeaderContainer>
  );
}
