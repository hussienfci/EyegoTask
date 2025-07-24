'use client';
import { useSelector } from "react-redux";
import { RootStateType } from "../../lib/store";
import Plot from "react-plotly.js";
type TableRow={
    price?: number ; 
    model?:string ; 
    make?:string  ;
}

function Chart() {
    const tableData = useSelector((state:RootStateType) => state.tableData); ; 
 

const pie = {
    type: "pie" as const , 
    values:tableData.rows.map((row: TableRow) => row.price as number), 
    labels: tableData.rows.map((row:TableRow)=> row.make as string),
    automargin:true  
};
console.log(tableData.rows.map((row: TableRow) => row.price));
console.log(tableData.rows.map((row: TableRow) => row.make));


const layout: Partial<Plotly.Layout> = {
  title:{text: "Car Prices by Company" }, 
};
const config = {responsive:true}
  return (
    <div className='relative mx-auto mt-9 h-100 w-full mb-20'>
      
        <Plot
            data={[pie]} 
            layout={layout}
            config={config}
            useResizeHandler= {true} 
            style={{ width: "100%", height: "100%" }}
        />
    </div>
  )
}

export default Chart
