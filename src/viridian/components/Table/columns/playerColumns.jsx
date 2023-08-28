import { Button } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TableButton } from "../buttons/TableButton";
import { useDispatch } from "react-redux";
import { eliminarJugador, seleccionarPlayer } from "../../../../store/players/thunks";

const BotonEliminar = (row) => {
    const dispatch = useDispatch();

    return (
        <TableButton 
            data = {null}
            action = {() => dispatch(eliminarJugador(row.original))}
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
            action = {() => dispatch(seleccionarPlayer(row.original))}
            icon = {<EditOutlinedIcon />}
            color = "secondary"
            size = "small"
            style = "contained"
        />
    )
}

export const columnsPlayer = [
    {
        accessorKey: 'name',
        header: 'Nombre',
        size: 100,         
        muiTableBodyCellProps: { align: 'left' },
    },
    {
        accessorKey: 'idunite',
        header: 'ID Unite',
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
        accessorKey: 'country',
        header: 'Pais',
        size: 100,         
        muiTableBodyCellProps: { align: 'center' },
    },
    {
        accessorKey: 'boton1',
        header: 'Editar',  
        size: 50,  
        muiTableBodyCellProps: { align: 'center' },
        Cell: ({ row }) => (
            BotonSeleccionar(row)
        )
    },
    {
        accessorKey: 'boton2',
        header: 'Eliminar',  
        size: 50,  
        muiTableBodyCellProps: { align: 'center' },
        Cell: ({ row }) => (
            BotonEliminar(row)
        )
    }   
];