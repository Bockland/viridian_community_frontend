import React from 'react'
import MaterialReactTable from 'material-react-table';

export const TablaRegistros = ({columns, data, toolbar, pageSize, rowsPerPage}) => {
    return (
      <>
      {
        (!data) ? <></>
        : <MaterialReactTable 
            columns={columns} 
            enableTopToolbar={toolbar}
            data={data}
            muiTablePaperProps={{
                sx: {
                    padding: '2%',
                    borderRadius: '20px',
                    backgroundColor: '#fff'
                }
            }}
            initialState={{
                density: 'compact',
                pagination: { pageSize: pageSize, pageIndex: 0 }
            }}    
            muiTablePaginationProps={{
                rowsPerPageOptions: rowsPerPage                    
            }}      
            muiTableHeadCellProps={{                    
                sx: {
                  fontWeight: 'bold',
                  fontSize: '14px',
                  paddingLeft: '30px'
                }
            }}
            muiTableBodyCellProps={{
                sx: {
                    paddingRight: '30px'
                }
            }}
            localization={{
                toggleDensity: 'Ancho de filas',
                toggleFullScreen: 'Mostrar pantalla completa',

                showHideColumns: 'Mostrar/ocultar columnas',
                showAllColumns: 'Mostrar todas las columnas',
                hideAll: 'Esconder todos',
                showAll: 'Mostrar todos',

                search: 'Buscar',
                clearSearch: 'Limpiar busqueda',
                showHideSearch: 'Mostrar/ocultar busqueda',

                clearFilter: 'Limpiar filtros',
                showHideFilters: 'Mostrar/ocultar filtros',
                filterByColumn: 'Filtrar por {column}',

                clearSort: 'Limpiar orden',
                sortByColumnAsc: 'Ordenar por {column} ascendente',
                sortByColumnDesc: 'Ordenar por {column} descendente',
                hideColumn: 'Ocultar columna {column}',
                rowsPerPage: 'Registros por pagina',

                noRecordsToDisplay: 'Sin registros para desplegar',
                noResultsFound: 'No se encontraron registros',
            }} 
        />
      }
      </>
    )
}
