/* eslint-disable prefer-template */
import React from 'react'
import {IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
import {Delete, Download, Edit, Visibility} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {CSVLink} from 'react-csv'
import moment from 'moment'
import MyDiv from './customTable.style'

export default function CustomTable(props) {


  const drawTable = () => {

    switch (props.type) {
      case 'category_name':
        return (
          <TableBody>
            {props?.tableData?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text_label">
                  {item.category_name_EN}
                </TableCell>
                <TableCell className="text_label">
                  <IconButton onClick={(e) => props.handleEdit(e, item.id)} className="icn_clr">
                    <Edit className="icn_size" />
                  </IconButton>
                </TableCell>
                <TableCell className="text_labelview">
                  <IconButton component={Link}
                    to={'/zunpakaloudela/subcategories/' + item.id}
                    className="icn_clr2"
                  >
                    <Visibility className="icn_size" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
      case 'sub_category_name':
        return (
          <TableBody>
            {props?.tableData?.[0]?.admin_sub_category?.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="text_label">{data.sub_category_name_EN}</TableCell>
                <TableCell className="text_label">
                  <IconButton onClick={(e) => props?.handleEditSubcategory(e, data)} className="icn_clr">
                    <Edit className="icn_size" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
      case 'packages':
        return (
          <TableBody>
            {props?.tableData?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text_label">{item.name}</TableCell>
                <TableCell className="text_label">{item.currency}{item.amount}</TableCell>
                <TableCell className="text_label">{item.updated_at ? moment(item.updated_at).format('DD/MM/YYYY') : ''}</TableCell>
                <TableCell className="text_label">
                  <IconButton onClick={(e) => props.handleEditPackage(e, item.package_id)} className="icn_clr">
                    <Edit className="icn_size" />
                  </IconButton>
                </TableCell>
                <TableCell className="text_label">
                  <IconButton onClick={() => props.handleDelete(item.package_id)} className="icn_clr">
                    <Delete className="icn_size" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )

      case 'customers':
        return (
          <TableBody>
            {props?.tableData?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text_label">{item.user_id}</TableCell>
                <TableCell className="text_label">{item.name}{' '}{item.surname}</TableCell>
                <TableCell className="text_label">{item.email}</TableCell>
                <TableCell className="text_label">{item.created_at ? moment(item.created_at).format('DD/MM/YYYY') : ''}</TableCell>
                <TableCell className="text_label">{item.package_name}</TableCell>
                <TableCell><Typography className={item.is_publish === 'Pending' ? 'status_red' : 'status_label'}>
                  {item.is_publish}
                </Typography></TableCell>
                <TableCell className="text_label">
                  <IconButton className="icn_clr2" component={Link} to={'/teacher/' + item.user_id}>
                    <Visibility className="icn_size" />
                  </IconButton>
                </TableCell>
                <TableCell className="text_label">
                  <IconButton onClick={() => props.handleDeleteUser(item.user_id, item.email)} className="icn_clr">
                    <Delete className="icn_size" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )

      case 'approvals':
        return (
          <TableBody>
            {props?.tableData?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text_label">{item.user_id}</TableCell>
                <TableCell className="text_label">{item.name}{' '}{item.surname}</TableCell>
                <TableCell className="text_label">{item.email}</TableCell>
                <TableCell className="text_label">{item.updated_at ? moment(item.updated_at).format('DD/MM/YYYY') : ''}</TableCell>
                <TableCell className="text_label">{item.user_status}</TableCell>
                <TableCell className="text_label">{item.package_name}</TableCell>
                <TableCell><Typography className={item.is_publish === 'Pending' ? 'status_red' : 'status_label'}>
                  {item.is_publish}
                </Typography></TableCell>
                <TableCell className="text_label">
                  <IconButton onClick={() => props.handleEditClick(item.user_id)} className="icn_clr">
                    <Edit className="icn_size" />
                  </IconButton>
                </TableCell>
                <TableCell className="text_label">
                  <IconButton onClick={() => props.handleDeleteUser(item.user_id, item.email)} className="icn_clr">
                    <Delete className="icn_size" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
      case 'invoice':
        return (
          <TableBody>
            {props.billingList?.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text_label">{item?.order_id}</TableCell>
                  <TableCell className="text_label">{item?.invoice_number}</TableCell>
                  <TableCell className="text_label">{moment(item.updated_at).format('YYYY')}</TableCell>
                  <TableCell className="text_label">
                    <CSVLink
                      data={props.billingList}
                      filename={'my-file.csv'}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      <IconButton>
                        <Download />
                      </IconButton>
                    </CSVLink>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        )
      case 'registrations':
        return (
          <TableBody>
            {props?.tableData?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text_label">{item.user_id}</TableCell>
                <TableCell className="text_label">{item.name}{' '}{item.surname}</TableCell>
                <TableCell className="text_label">{item.email}</TableCell>
                <TableCell className="text_label">{item.updated_at ? moment(item.updated_at).format('DD/MM/YYYY') : ''}</TableCell>
                <TableCell className="text_label">{item.user_status}</TableCell>
                <TableCell className="text_label">{item.package_name}</TableCell>
                <TableCell><Typography className={item.is_publish === 'Pending' ? 'status_red' : 'status_label'}>
                  {item.is_publish}
                </Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        )
      default:
        break
    }
  }

  return (
    <MyDiv>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {props.tableHeading.map((item, index) => (
                <TableCell key={index} className="title_label">{item.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {drawTable()}
        </Table>
      </TableContainer>
    </MyDiv>
  )
}
