import { styled } from "@mui/material/styles";
import illu from "../assets/illustration-3.png";

const Section = styled("section")`
  background: #f4f4f4;
  padding: 80px 0;
`;

const Grid = styled("div")`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
`;

const Image = styled("img")`
  max-height: 420px;
  width: auto;
  margin: auto;
`;

export default function Value() {

  return (

    <Section id="valeur">

      <Grid>

        <div>

          <h2>Qu'apporte Parcours dans votre démarche processus ?</h2>

          <p>
            Votre intranet est saturé de messages et de chemins d'accès.
            Les processus existent mais sont difficiles à trouver.
          </p>

          <p>
            Parcours permet de mettre en visibilité les processus
            sans les réécrire et d'identifier simplement les responsables.
          </p>

        </div>

        <Image src={illu} />

      </Grid>

    </Section>
  );
}
