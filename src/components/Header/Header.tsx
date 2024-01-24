import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        color: '#A1A1AA',
        boxShadow: 'none',
      }}
    >
      <div className={styles.flex}>
        <IconButton>
          <AppsIcon sx={{ color: '#A1A1AA' }} />
        </IconButton>
        <IconButton>
          <ReplyIcon sx={{ color: '#A1A1AA' }} />
        </IconButton>
        <List sx={{ padding: '0', marginLeft: '30px' }} className={styles.flex}>
          <ListItem
            sx={{ padding: '14px 0', marginRight: '30px' }}
            className={styles.active}
          >
            <ListItemButton sx={{ padding: '0' }}>Просмотр</ListItemButton>
          </ListItem>
          <ListItem sx={{ padding: '14px 0' }}>
            <ListItemButton sx={{ padding: '0' }}>Управление</ListItemButton>
          </ListItem>
        </List>
      </div>
    </AppBar>
  );
};
