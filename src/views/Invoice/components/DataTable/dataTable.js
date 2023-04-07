import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import React from 'react'
import MyDiv from './dataTable.style'
export default function DataTable(props) {
  return (
    <MyDiv>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="title_label">{props.title1}</TableCell>
              <TableCell className="title_label">{props.title2}</TableCell>
              <TableCell className="title_label">{props.title3}</TableCell>
              <TableCell className="title_label">{props.title4}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.value.map((value) => (
              <TableRow key={value.id}>
                <TableCell className="text_label">
                  {value.id}
                </TableCell>
                <TableCell className="text_label">
                  {value.invoice}
                </TableCell>
                <TableCell className="text_label">
                  {value.year}
                </TableCell>
                <TableCell className="text_label">
                  {props.startElement}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MyDiv>
  )
}
