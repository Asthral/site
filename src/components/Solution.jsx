import { styled } from "@mui/material/styles";
import illu from "../assets/illustration-1.png";

const Section = styled("section")`
  padding: 80px 0;
`;

const Grid = styled("div")`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
`;

export default function Solution() {
  return (

    <Section id="solution">

      <Grid>

        <img src={illu} />

        <div>

          <h2>Représentez vos processus simplement</h2>

          <p>
            Parcours permet de représenter vos processus sous forme
            d'arborescences simples découpées en étapes.
          </p>

          <p>
            Les parcours sont modifiables en quelques clics et
            s'intègrent directement dans votre intranet.
          </p>

        </div>

      </Grid>

    </Section>
  );
}
