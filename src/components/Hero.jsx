import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import illu from "../assets/illustration-2.png";

const Section = styled("section")`
  padding: 80px 0;
`;

const Container = styled("div")`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
`;

export default function Hero() {
  return (

    <Section>

      <Container>

        <div>

          <h1>
            Créez des fiches réflexes et simplifiez l'accès à vos processus
          </h1>

          <p>
            Parcours est une application intuitive, une boîte à outils
            qui vous permet de créer des fiches réflexes.
          </p>

          <p>
            Vos documents et processus métier restent inchangés,
            mais deviennent accessibles à tous les utilisateurs.
          </p>

          <Button variant="contained" color="warning">
            Tester l'application
          </Button>

        </div>

        <img src={illu} />

      </Container>

    </Section>
  );
}
