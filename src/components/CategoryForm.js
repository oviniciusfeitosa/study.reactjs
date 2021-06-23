import { Button, TextField, Grid, Typography } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import react from "react";

export const CategoryForm = () => {
  return (
    <>
      <form>
        <h2>Formulário</h2>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField required label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
