import { styled } from "@mui/material/styles";

const FooterContainer = styled("footer")`
  background: #222;
  color: white;
  padding: 40px;
  text-align: center;
`;

export default function Footer() {

  return (

    <FooterContainer>

      <h3>Parcours</h3>

      <p>contact@parcours.io</p>

      <p>17 rue Plantin — 37000 Tours</p>

      <p>© 2026 Parcours</p>

    </FooterContainer>

  );
}
