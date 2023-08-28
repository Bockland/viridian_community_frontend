import { Button } from "@mui/material";
import { SelectUser } from "../buttons/SelectUser";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TableButton } from "../buttons/TableButton";
import { useUser } from "../../../../hooks/useUser";
import { useDispatch } from "react-redux";
import { eliminarUsuario, seleccionarUsuario } from "../../../../store/usuarios/thunks";

const BotonEliminar = (row) => {
    const dispatch = useDispatch();

    return (
        <TableButton 
            data = {null}
            action = {() => dispatch(eliminarUsuario(row.original))}
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
            action = {() => dispatch(seleccionarUsuario(row.original))}
            icon = {<EditOutlinedIcon />}
            color = "secondary"
            size = "small"
            style = "contained"
        />
    )
}

export const columnsUser = [
    {
        accessorKey: 'name',
        header: 'Nombre',
        size: 100,         
        muiTableBodyCellProps: { align: 'left' },
    },
    {
        accessorKey: 'rol',
        header: 'Rol',
        size: 100,         
        muiTableBodyCellProps: { align: 'left' },
    },
    {
        accessorKey: 'team',
        header: 'Equipo',
        size: 100,         
        muiTableBodyCellProps: { align: 'center' },
    },
    {
        accessorKey: 'enable',
        header: 'Estado',        
        size: 50,  
        muiTableBodyCellProps: { align: 'center' },
        Cell: ({ row }) => (
            <Button
                variant="contained"                                  
                color={(row.original.enable) ? "success" : "error"}
            >
                {(row.original.enable) ? 
                <CheckCircleOutlinedIcon /> 
                : <RemoveCircleOutlinedIcon />}
            </Button>
        )
    },
    {
        accessorKey: 'password',
        header: 'Editar',  
        size: 50,  
        muiTableBodyCellProps: { align: 'center' },
        Cell: ({ row }) => (
            BotonSeleccionar(row)
        )
    },
    {
        accessorKey: '_id',
        header: 'Eliminar',  
        size: 50,  
        muiTableBodyCellProps: { align: 'center' },
        Cell: ({ row }) => (
            BotonEliminar(row)
        )
    }        
];
