import { IconButton, TableCell } from '@mui/material';
import { FC, useState } from 'react';
import FeedIcon from '@mui/icons-material/Feed';
import DeleteIcon from '@mui/icons-material/Delete';

type PropsType = {
  id: number;
  editMode: boolean;
  depth: number;
  createNewRow: (id: number) => void;
  deleteRow: (id: number) => void;
};

export const TableActions: FC<PropsType> = ({
  id,
  editMode,
  depth,
  createNewRow,
  deleteRow,
}) => {
  const style = {
    paddingLeft: depth * 2,
    width: 170,
    boxSizing: 'border-box',
    borderColor: '#414144',
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <TableCell
      sx={style}
      size="small"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* <Box
        sx={{ display: 'inline-block' }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      > */}
      <IconButton
        disabled={editMode}
        onClick={() => createNewRow(id)}
        sx={{ padding: 0 }}
      >
        <FeedIcon sx={{ color: '#7890B2' }} />
      </IconButton>
      {isHovering && (
        <IconButton disabled={editMode} onClick={() => deleteRow(id)}>
          <DeleteIcon sx={{ color: '#DF4444' }} />
        </IconButton>
      )}
      {/* </Box> */}
    </TableCell>
  );
};
