import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { FullBodyType } from '../../types';
import { FC } from 'react';
import { Row } from '../Row';
import { Spinner } from './Spinner';

type PropsType = {
  rows: FullBodyType[];
  deleteHandler: (id: number) => void;
  addRowHandler: (id: number, row: FullBodyType) => void;
};

export const Main: FC<PropsType> = ({ rows, deleteHandler, addRowHandler }) => {
  const values = [
    'Уровень',
    'Наименование работ',
    'Основная з/п',
    'Оборудование',
    'Накладные расходы',
    'Сметная прибыль',
  ];

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        alignItems={'center'}
        sx={{
          height: 44,
        }}
      >
        <Box
          sx={{
            fontSize: '18px',
            padding: '0 15px',
          }}
        >
          Строительно-монтажные работы
        </Box>
        <Divider sx={{ bgcolor: '#414144' }} orientation="vertical" flexItem />
      </Stack>
      <Divider sx={{ bgcolor: '#414144' }} />
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            {values.map((v) => (
              <TableCell
                sx={{ color: '#A1A1AA', borderColor: '#414144' }}
                key={v}
              >
                {v}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length ? (
            rows.map((row: FullBodyType) => (
              <Row
                key={row.id}
                row={row}
                depth={1}
                deleteHandler={deleteHandler}
                addRowHandler={addRowHandler}
              />
            ))
          ) : (
            <Spinner />
          )}
        </TableBody>
      </Table>
    </Box>
  );
};
