import success from "../../assets/welcome.svg";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Landing = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      className="landing-grid"
    >
      {isMobile ? (
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: "grey", font: "monospace" }}>
           Hi I am <strong>
              <i>Shashank</i>
            </strong> and I Welcome you to{" "}
            <strong>
              <i>Kendra</i>
            </strong>
            !
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid item xs={6}>
            <Typography variant="h1" sx={{ color: "grey", font: "monospace" }}>
              Hi and Welcome to{" "}
              <strong>
                <i>Kendra</i>
              </strong>
              !
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              src={success}
              alt="Relaxation"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Landing;
