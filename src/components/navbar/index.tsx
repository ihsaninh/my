import NavigationItems from './navigation-items';
import { navItems } from '@/src/data';

function Navbar() {
  return <NavigationItems navItems={navItems} />;
}

export default Navbar;
