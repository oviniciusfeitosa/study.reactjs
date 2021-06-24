import React from "react";
import { useCategories } from "../context/CategoryContext";

import {
  Button,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function CategoryList() {
  const {
    categories,
    handleEditCategory,
    handleDeleteCategory,
    addStageCategory,
  } = useCategories();

  const handleAddCategoryToStage = (category) => {
    addStageCategory(category);
  };

  return (
    <>
      <h1>CategoryList</h1>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => {
              return (
                <TableRow key={category.id}>
                  <TableCell component="th" scope="row">
                    {category.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddCategoryToStage(category)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteCategory(category.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CategoryList;
