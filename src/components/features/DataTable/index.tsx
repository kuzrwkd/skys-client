import React from 'react';
import type {DataTableProps} from '@/packages/skys-base-ui/SBUDataTable';
import SBUDataTable from '@/packages/skys-base-ui/SBUDataTable';

function DataTable(props: DataTableProps) {
  return <SBUDataTable {...props} />;
}

export default DataTable;
