import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDealsContext } from "../../context/todayDealsContext";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "product_title",
    headerName: "product_title",
    width: 150,
    editable: true,
  },
  {
    field: "original_price",
    headerName: "original_price",
    width: 150,
    editable: true,
  },
  {
    field: "app_sale_price",
    headerName: "app_sale_price",
    width: 110,
    editable: true,
  },
  {
    field: "deal_start",
    headerName: "deal_start",
    width: 110,
    editable: true,
  },
  {
    field: "deal_end",
    headerName: "deal_end",
    width: 110,
    editable: true,
  },
  {
    field: "product_main_image_url",
    headerName: "product_main_image_url",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.deal_start || ""} ${params.row.deal_end || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ProductTable = () => {
  // const {products_docs} = useDealsContext();
//   console.log(deals)
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        getRowId={(row) => row.internalId}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default ProductTable;
