import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function LocationPage() {
  const navigate = useNavigate();

  // ---------------------------------------------
  // Transformations
  const handleNavigate = () => {
    navigate("/locations");
  };
  // ---------------------------------------------
  // Render

  return (
    <Container sx={{ mt: "1rem" }}>
      <Typography variant="h4">GabiTrip</Typography>

      {/* Form */}
      <Typography variant="h5">Localidade</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label={"Cidade"} fullWidth required />
        </Grid>
        <Grid item xs={6}>
          <TextField label={"Pais"} fullWidth required />
        </Grid>
        <Grid item xs={6}>
          <TextField label={"Nome do hotel"} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label={"Telefone do hotel"} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField multiline rows={5} label={"O que fazer? "} fullWidth />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        marginTop={"1rem"}
        justifyContent={"space-between"}
        justifyItems={"center"}
      >
        <Grid item xs={4} margin={"auto"}>
          <Button variant="outlined" onClick={handleNavigate}>
            Cancelar
          </Button>
        </Grid>
        <Grid item xs={4} margin={"auto"}>
          <Button variant="outlined" color="error">
            Remover
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
