import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

function Language(props){

    return (
        <>
            <Typography variant="h2" sx={{ textAlign: 'center', mt: 2 }}>
                שפות
            </Typography>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>מזהה</TableCell>
                    <TableCell>שם</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.Arry.map((item)=>(
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </>
    );
}

export default Language;