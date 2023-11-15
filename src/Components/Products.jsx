import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const API_URL = '/api/products';

const Products = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setRowData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Type', field: 'type', sortable: true, filter: 'agTextColumnFilter' },
    { headerName: 'Color', field: 'color', sortable: true, filter: 'agTextColumnFilter' },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-material" style={{ height: 700, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={100}
        rowHeight={50}
      />
    </div>
  );
};

export default Products;
