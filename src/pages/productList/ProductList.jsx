import React from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid'
import {MdDeleteOutline} from 'react-icons/md'
import {productRows} from '../../dummyData'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
          return (
            <div className='productListUser'>
              <img className='productListImg' src={params.row.img} alt="" />
              {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'Price',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 150,
          renderCell: (params) => {
            return (
              <>
              <Link to={"/product/" + params.row.id}>
                <button className='productListEdit'>Edit</button>
              </Link>
                <MdDeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)}/>
              </>
            )
          }
        }
      ];

  return (
    <div className='productList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList