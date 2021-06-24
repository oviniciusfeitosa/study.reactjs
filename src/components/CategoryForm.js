import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  InputLabel,
  Avatar,
  Typography,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import React, { useState } from "react";
import { useCategories } from "../context/CategoryContext";

export const CategoryForm = ({ ...category }) => {
  const { addCategory, handleEditCategory } = useCategories();

  const initialState = {
    id: "",
    name: "",
  };

  if (!category) {
    category = initialState;
  }

  // const [stageCategory, setStageCategory] = useState(category);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (category.id) {
      //aqui seria o edit de categoria
      handleEditCategory(category);
    } else {
      addCategory({
        name: category.name,
      });
    }

    event.target.reset();
  };

  const showLabelIdCategory = () => {
    if (category.id) {
      return <Typography color="textSecondary">ID: {category.id}</Typography>;
    }
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
                {showLabelIdCategory()}
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={category.name}
                  onChange={(e) =>
                    category({ ...stageCategory, name: e.target.value })
                  }
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
