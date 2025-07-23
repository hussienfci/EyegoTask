'use client';
import  { useState } from 'react' ; 

import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry, themeAlpine, themeBalham, themeMaterial, themeQuartz } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react';


ModuleRegistry.registerModules([AllCommunityModule]);


interface IRow{
    make:string ; 
    model:string  ;
    price: number ; 
    electric:boolean ; 
}

const themes = [
  { id: "themeQuartz", theme: themeQuartz },
  { id: "themeBalham", theme: themeBalham },
  { id: "themeMaterial", theme: themeMaterial },
  { id: "themeAlpine", theme: themeAlpine },
];
type PartSelectorProps<T extends { id: string } | null> = {
  options: T[];
  value: T;
  setValue: (value: T) => void;
};

const PartSelector = <T extends { id: string; variant?: string } | null>({
  options,
  value,
  setValue,
}: PartSelectorProps<T>) => (
  <select
    onChange={(e) =>
      setValue(options.find((t) => t?.id === e.currentTarget.value)! || null)
    }
    style={{ marginRight: 16 }}
    value={value?.id}
  >
    {options.map((option, i) => (
      <option key={i} value={option?.id}>
        {option?.variant || option?.id || "(unchanged)"}
      </option>
    ))}
  </select>
);

function Table() {
     const [rowData, setRowData] = useState<IRow[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  const [theme, setBaseTheme] = useState(themes[0]);
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
    <div className='mx-auto mt-9 h-100 w-full' >
      <div className='border-2 border-b-0  border-[#eee7e7] rounded-bl-2xl  ml-1 w-50 '
      >
       <p className='pl-0.5' style={{ flex: 0 }}>
        Theme:{" "}
        <PartSelector options={themes} value={theme} setValue={setBaseTheme} />
      </p>

      </div>
         <AgGridReact 
         theme={theme.theme} 
          rowData={rowData} 
          columnDefs={colDefs} 
           defaultColDef={defaultColDef} 
          />
          <h1>Car Inventory</h1>
    </div>
  );
}

export default Table
