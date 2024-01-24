import { userAPI } from './api/api';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { FullBodyType } from './types';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { recursiveAdd, recursiveDelete } from './helpers';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  const [rows, setRows] = useState<FullBodyType[]>([]);

  useEffect(() => {
    userAPI.getTreeRows().then((res) => setRows(res));
  }, []);

  const deleteRowHandler = (id: number) => {
    setRows((prev) => recursiveDelete(prev, id));
  };

  const addRowHandler = (id: number, row: FullBodyType) => {
    setRows((prev) => recursiveAdd(prev, id, row));
  };

  return (
    <>
      <Header />
      <Divider sx={{ bgcolor: '#414144' }} />
      <Stack
        direction="row"
        divider={
          <Divider
            sx={{ bgcolor: '#414144' }}
            orientation="vertical"
            flexItem
          />
        }
      >
        <Box
          sx={{
            width: 234,
            height: '95vh',
          }}
        >
          <Stack
            direction="row"
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{
              padding: '0 8px',
              height: 44,
            }}
          >
            <Box
              sx={{
                padding: '0 0 0 10px',
                color: '#A1A1AA',
              }}
            >
              <Typography variant="inherit" display="block">
                Название проекта
              </Typography>
              <Typography variant="inherit" sx={{ fontSize: '10px' }}>
                Аббревиатура
              </Typography>
            </Box>
            <IconButton size="large" sx={{ padding: '0' }}>
              <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Stack>
          <Divider sx={{ bgcolor: '#414144' }} />
          <List disablePadding>
            {[
              'По проекту',
              'Объекты',
              'РД',
              'МТО',
              'СМР',
              'График',
              'МиМ',
              'Рабочие',
              'Капвложения',
              'Бюджет',
              'Финансирование',
              'Панорамы',
              'Камеры',
              'Поручения',
              'Контрагенты',
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <DashboardIcon />
                  <ListItemText primary={text} sx={{ padding: '0 0 0 14px' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Main
          rows={rows}
          deleteHandler={deleteRowHandler}
          addRowHandler={addRowHandler}
        />
      </Stack>
    </>
  );
}

export default App;
