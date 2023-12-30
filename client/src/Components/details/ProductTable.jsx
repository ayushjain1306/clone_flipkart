import React from "react";
import { Table, TableBody, TableRow, TableCell, Typography, styled } from "@mui/material"

const Typo = styled(Typography)`
    font-size: 15px;
    color: black;
`

function ProductTable({product}) {
    const date = new Date(new Date().getTime() + 5*24*60*60*1000);
    return (
        <Table style ={{
            marginTop: "20px",
            marginBottom: "25px"
        }}>
            <TableBody>
                <TableRow>
                    <TableCell style= {{fontWeight: "bolder", color: "black"}}>Delivery By</TableCell>
                    <TableCell style ={{color: "black"}}>
                        {date.toDateString()} | ₹40
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style= {{fontWeight: "bolder", color: "black"}}>Warranty</TableCell>
                    <TableCell style ={{color: "black"}}>
                        No Warranty
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style= {{fontWeight: "bolder", color: "black"}}>Sellers</TableCell>
                    <TableCell style ={{color: "black"}}>
                        <Typo style ={{color: "#2874f0"}}>SuperComNet</Typo>
                        <Typo>GST invoice available</Typo>
                        <Typo>View more Sellers starting from ₹{product.price.cost}</Typo>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style= {{fontWeight: "bolder", color: "black"}}>Description</TableCell>
                    <TableCell style ={{color: "black"}}>
                        {product.description}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default ProductTable;