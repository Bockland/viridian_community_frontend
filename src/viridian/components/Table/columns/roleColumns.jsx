import { Button } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TableButton } from "../buttons/TableButton";
import { useDispatch } from "react-redux";
import { eliminarRol, seleccionarRol } from "../../../../store/roles/thunks";

const BotonEliminar = (row) => {
    const dispatch = useDispatch();

    return (
        <TableButton 
            data = {null}
            action = {() => dispatch(eliminarRol(row.original))}
            icon = {<DeleteOutlineOutlinedIcon />}
            color = "error"
            size = "small"
            style = "contained"
        />
    )
}

const BotonSeleccionar = (row) => {
    const dispatch = useDispatch();

    return (
        <TableButton 
            data = {null}
            action = {() => dispatch(seleccionarRol(row.original))}
            icon = {<EditOutlinedIcon />}
            color = "secondary"
            size = "small"
            style = "contained"
        />
    )
}

export const columnsRole = [
    {
        accessorKey: 'name',
        header: 'Nombre',
        size: 300,         
        muiTableBodyCellProps: { align: 'left' },
    },
    {
        accessorKey: 'boton2',
        header: 'Editar',  
        size: 50,  
        muiTableBodyCellProps: { align: 'center' },
        Cell: ({ row }) => (
            BotonSeleccionar(row)
        )
    },
    {
        accessorKey: 'boton3',
        header: 'Eliminar',  
        size: 50,  
        muiTableBodyCellProps: { align: 'center' },
        Cell: ({ row }) => (
            BotonEliminar(row)
        )
    }        
];