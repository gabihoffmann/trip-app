import { Controller } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import { useLocalForm } from "./useLocalForm";
import { LocalFormValues } from "./useLocalForm/types";

interface SearchFiltersProps {
  onSubmit(values: LocalFormValues): void;
}

export function SearchFilters(props: SearchFiltersProps) {
  const form = useLocalForm();
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render
  return (
    <form onSubmit={form.handleSubmit(props.onSubmit)}>
      <Grid
        container
        spacing={2}
        alignContent={"center"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Grid item xs={4}>
          <Controller
            name="city"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                type="text"
                label="Cidade"
                error={fieldState.error ? true : false}
                helperText={fieldState.error?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={form.control}
            name="country"
            render={({ field, fieldState }) => (
              <TextField
                type="text"
                label="Pais"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" type="submit">
            Buscar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
