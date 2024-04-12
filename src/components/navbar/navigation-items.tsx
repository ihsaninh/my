import { NavItem } from '@/src/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

function NavigationItems({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState<string>('resume');

  useEffect(() => {
    const urlKey = pathname.split('/').pop() || 'resume';
    setActiveNavItem(urlKey);
  }, [pathname]);

  const handleNavItemClick = (navItem: NavItem): void => {
    setActiveNavItem(navItem.key);
    router.push(navItem.url);
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {navItems.map((item: NavItem) => (
          <li
            className='navbar-item'
            key={item.key}
            onClick={() => handleNavItemClick(item)}
          >
            <button
              className={`navbar-link ${
                activeNavItem === item.key && 'active'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationItems;
