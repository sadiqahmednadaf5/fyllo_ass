import React from "react";
import { data } from "../../data";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry,themeAlpine  } from "ag-grid-community";

import "./ProductList.css";


ModuleRegistry.registerModules([AllCommunityModule]);
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
    sortable: true,
    floatingFilter: true,
  },

  {
    field: "_year",
    headerName: "Year",
    width: 200,
    sortable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "month",
    filter: "agTextColumnFilter",
    headerName: "Month",
    width: 150,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "product",
    filter: "agTextColumnFilter",
    headerName: "Product",
    width: 180,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "state",
    filter: "agTextColumnFilter",
    headerName: "State",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "requirement_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Requirement (MT)",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "availability_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Availability (MT)",
    width: 190,
    sortable: true,
    floatingFilter: true,
  },
];

function ProductList() {
  const defaultColDef = {
    filter: true,
    floatingFilter: true,
    sortable: true,
    resizable: true,
  };

  return (
    <div className="productList">
      <h2>Fertilizer List</h2>
      <div
        className="productListTable ag-theme-alpine"
        style={{ height: "600px", width: "93%" }}
      >
        <AgGridReact
         theme={themeAlpine}
          rowData={data}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          animateRows={true}
        />
      </div>
    </div>
  );
}

export default ProductList;
