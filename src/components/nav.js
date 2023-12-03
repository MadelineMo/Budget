/*
* components/nav.js
* - custom components usage for navigation
*/

// import navigation components - drawer
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

// import custom components
import { Header } from './structure.js';

// import default app styles
import { styles } from '../styles/default.js';

/*
* drawer usage
*/

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView style={styles.DrawerContentScrollView}>
			<Header style={styles.drawerHeader} type={styles.h4} heading='menu' />
      <DrawerItemList style={styles.DrawerItemList} />
    </DrawerContentScrollView>
  );
}

export {
	CustomDrawerContent,
};
