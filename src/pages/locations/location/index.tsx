import { useEffect } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Controller } from "react-hook-form";
import { useLocalForm } from "./useLocalForm";
import { useLocationService } from "./useLocationService";
import { getFormValuesFromDtoLocationTrip } from "./helpers";
import { LocalFormValues } from "./useLocalForm/types";

export function LocationPage() {
  // router-dom
  const { id } = useParams();
  const navigate = useNavigate();

  const locationId = id ? parseInt(id) : undefined;

  // react hook form
  const form = useLocalForm();
  const { reset: formReset } = form;

  // custom hook
  const service = useLocationService({
    locationId,
  });
  // ---------------------------------------------
  // Transformations
  const handleNavigate = () => {
    navigate("/locations");
  };

  const handleSubmitLocation = (data: LocalFormValues) => {
    service.save(data);
  };
  // ---------------------------------------------
  // Effects

  useEffect(() => {
    if (service.location)
      formReset(getFormValuesFromDtoLocationTrip(service.location));
  }, [service.location, formReset]);

  // ---------------------------------------------
  // Render

  return (
    <Container sx={{ mt: "1rem" }}>
      <Typography variant="h4">GabiTrip</Typography>

      {/* Form */}
      <Typography variant="h5" sx={{ mb: "1rem" }}>
        Localidade
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            name={"city"}
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                label={"Cidade"}
                fullWidth
                error={fieldState.error ? true : false}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name={"country"}
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                label={"Pais"}
                fullWidth
                error={fieldState.error ? true : false}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name={"hotel.name"}
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                label={"Nome do hotel"}
                fullWidth
                error={fieldState.error ? true : false}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name={"hotel.phone"}
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                type="tel"
                label={"Telefone do hotel"}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name={"travel"}
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                multiline
                rows={5}
                label={"O que fazer? "}
                fullWidth
                {...field}
              />
            )}
          />
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
          <Button
            type="submit"
            variant="contained"
            onClick={() => form.handleSubmit(handleSubmitLocation)()}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
