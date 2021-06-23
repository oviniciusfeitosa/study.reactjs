import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardHeader,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import React, { useState } from "react";
import { useCategories } from "../context/CategoryContext";

export const CategoryForm = () => {
  const { addCategory } = useCategories();
  // const [category, setCategory] = useState({ id: 0, name: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    addCategory({
      name: data.get("name"),
    });
    event.target.reset();
  };

  return (
    <>
      <Card elevation={3} variant="outlined">
        <form onSubmit={handleSubmit}>
          <CardHeader title="Formulário" />
          <CardContent>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};
