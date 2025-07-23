'use client';
import  { useState } from 'react' ; 

import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react';


ModuleRegistry.registerModules([AllCommunityModule]);


interface IRow{
    make:string ; 
    model:string  ;
    price: number ; 
    electric:boolean ; 
}



function Table() {
     const [rowData, setRowData] = useState<IRow[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
            { field: "make" },
            { field: "model" },
            { field: "price" },
            { field: "electric" },
        ]);
    const defaultColDef: ColDef = {
      flex: 1,
      minWidth: 80,
      filter: true,
      floatingFilter: true,
    };
  return (
    <div className='mx-auto h-35 w-full' >
         <AgGridReact 
          rowData={rowData} 
          columnDefs={colDefs} 
           defaultColDef={defaultColDef} 
          />
          <h1>Car Inventory</h1>
    </div>
  );
}

export default Table
