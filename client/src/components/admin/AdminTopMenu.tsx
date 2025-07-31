import { Link } from 'react-router';
import { AdminMenuLinks } from './AdminMenuLinks';

export const AdminTopMenu = () => {
  return (
    <nav className='flex items-center justify-around gap-4 mb-2 bg-gray-200 rounded-lg py-1 px-2'>
      {AdminMenuLinks.map((link) => (
        <Link
          key={link.name}
          to={link.link}
          className='p-2 bg-rose-800/90 text-white rounded-lg'
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
