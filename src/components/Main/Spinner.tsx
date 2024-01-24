import { CircularProgress, TableCell, TableRow } from '@mui/material';

export const Spinner = () => {
  return (
    <TableRow>
      <TableCell colSpan={12} sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
};
