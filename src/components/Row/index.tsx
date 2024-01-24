import { userAPI } from '../../api/api';
import { Input, TableCell, TableRow } from '@mui/material';
import { FullBodyType, ResType, SmallBodyType } from '../../types';
import { FC, useEffect, useState } from 'react';
import { TableActions } from './TableActions';

type PropsType = {
  row: FullBodyType;
  depth: number;
  deleteHandler: (id: number) => void;
  addRowHandler: (id: number, row: FullBodyType) => void;
};

export const Row: FC<PropsType> = ({
  row,
  depth,
  deleteHandler,
  addRowHandler,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [currentRow, setCurrentRow] = useState(row);

  useEffect(() => {
    if (!currentRow.rowName) {
      setEditMode(true);
    }
  }, [currentRow.rowName]);

  const createNewRow = (id: number) => {
    const newRow: FullBodyType = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: '',
      salary: 0,
      supportCosts: 0,
      parentId: id,
      id: 0,
      child: [],
    };

    userAPI.createRowInEntity(newRow).then((res: ResType) => {
      addRowHandler(id, {
        ...newRow,
        id: res.current.id,
      });
    });
  };

  const deleteRow = (id: number = 0) => {
    userAPI.deleteRow(id);
    deleteHandler(id);
  };

  const onSubmit = (e: any, id: number) => {
    const newRow: SmallBodyType = {
      //equipmentCosts: e.currentTarget[4].children.value,
      equipmentCosts: e.currentTarget.children[3].children[0].children[0].value,
      estimatedProfit:
        e.currentTarget.children[5].children[0].children[0].value,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: e.currentTarget.children[4].children[0].children[0].value,
      rowName: e.currentTarget.children[1].children[0].children[0].value,
      salary: e.currentTarget.children[2].children[0].children[0].value,
      supportCosts: 0,
    };
    userAPI.updateRow(id, newRow).then((res: ResType) => {
      setCurrentRow((prev: FullBodyType) => ({
        ...prev,
        ...res.current,
      }));
    });

    setEditMode(false);
  };

  const onKeyDown = (e: any, id: number) => {
    if (e.code === 'Enter') {
      onSubmit(e, id);
    }
  };

  return (
    <>
      <TableRow
        key={row.id}
        onKeyDown={(e) => onKeyDown(e, currentRow.id)}
        onDoubleClick={() => setEditMode(true)}
      >
        <TableActions
          id={row.id}
          editMode={editMode}
          depth={depth}
          createNewRow={createNewRow}
          deleteRow={deleteRow}
        />
        {!editMode && (
          <>
            <TableCell sx={{ color: 'inherit', borderColor: '#414144' }}>
              {currentRow.rowName}
            </TableCell>
            <TableCell sx={{ color: 'inherit', borderColor: '#414144' }}>
              {currentRow.salary}
            </TableCell>
            <TableCell sx={{ color: 'inherit', borderColor: '#414144' }}>
              {currentRow.equipmentCosts}
            </TableCell>
            <TableCell sx={{ color: 'inherit', borderColor: '#414144' }}>
              {currentRow.overheads}
            </TableCell>
            <TableCell sx={{ color: 'inherit', borderColor: '#414144' }}>
              {currentRow.estimatedProfit}
            </TableCell>
          </>
        )}

        {/* {editMode && (
          <TableCell>
            <Box
              component="form"
              onKeyDown={(e) => onKeyDown(e, currentRow.id)}
            >
              <TableCell>
                <TextField autoFocus defaultValue={currentRow.rowName} />
              </TableCell>
              <TextField defaultValue={currentRow.salary} />
              <TextField defaultValue={currentRow.equipmentCosts} />
              <TextField defaultValue={currentRow.overheads} />
              <TextField defaultValue={currentRow.estimatedProfit} />
            </Box>
          </TableCell>
        )} */}

        {editMode && (
          <>
            <TableCell sx={{ borderColor: '#414144' }}>
              <Input
                required
                fullWidth
                autoFocus
                defaultValue={currentRow.rowName}
                sx={{
                  color: '#71717A',
                  border: '1px solid #414144',
                  padding: '3px 10px',
                  borderRadius: '5px',
                }}
              />
            </TableCell>
            <TableCell sx={{ borderColor: '#414144' }}>
              <Input
                type="number"
                fullWidth
                defaultValue={currentRow.salary}
                sx={{
                  color: '#71717A',
                  border: '1px solid #414144',
                  padding: '3px 10px',
                  borderRadius: '5px',
                }}
              />
            </TableCell>
            <TableCell sx={{ borderColor: '#414144' }}>
              <Input
                type="number"
                fullWidth
                defaultValue={currentRow.equipmentCosts}
                sx={{
                  color: '#71717A',
                  border: '1px solid #414144',
                  padding: '3px 10px',
                  borderRadius: '5px',
                }}
              />
            </TableCell>
            <TableCell sx={{ borderColor: '#414144' }}>
              <Input
                type="number"
                fullWidth
                defaultValue={currentRow.overheads}
                sx={{
                  color: '#71717A',
                  border: '1px solid #414144',
                  padding: '3px 10px',
                  borderRadius: '5px',
                }}
              />
            </TableCell>
            <TableCell sx={{ borderColor: '#414144' }}>
              <Input
                fullWidth
                type="number"
                defaultValue={currentRow.estimatedProfit}
                sx={{
                  color: '#71717A',
                  border: '1px solid #414144',
                  padding: '3px 10px',
                  borderRadius: '5px',
                }}
              />
            </TableCell>
          </>
        )}
      </TableRow>

      {!!row.child.length &&
        row.child.map((item) => {
          return (
            <Row
              key={item.id}
              row={item}
              depth={depth + 1}
              deleteHandler={deleteHandler}
              addRowHandler={addRowHandler}
            />
          );
        })}
    </>
  );
};
