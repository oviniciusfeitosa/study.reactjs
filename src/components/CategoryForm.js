import { Button, TextField, Grid, Typography } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import React, { useState } from "react";

export const CategoryForm = () => {
  const [category, setCategory] = useState({ id: 0, name: "" });

  const handleAddCategory = (e) => {
    
    //@todo: Obter último id de categoria e incrementar antes de adicionar um novo
    setCategory({
      ...category,
      { 
        id: category.id+= 1,
        name: e.target.value
      }
    });
  }

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
              onChange={(e) => handleAddCategory(e)}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
