import { Link, useLocation } from 'react-router';
import type { IconType } from 'react-icons/lib';
import { MdDashboard } from 'react-icons/md';
import { AiFillPrinter } from 'react-icons/ai';

interface IAdminMenuLink {
  name: string;
  link: string;
  icon: IconType;
}

export const AdminMenu = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const topMenuLinks: IAdminMenuLink[] = [
    { name: 'Suvestinė', link: '/admin', icon: MdDashboard },
    {
      name: 'Spausdintuvai',
      link: '/admin/spausdintuvai',
      icon: AiFillPrinter,
    },
  ];

  return (
    <nav className='flex items-center justify-end gap-4 mb-2 bg-gray-200 rounded-lg py-1 px-2'>
      <div className='flex gap-3 items-center'>
        {topMenuLinks.map(({ name, link, icon: Icon }) => (
          <Link
            key={name}
            to={link}
            className={`p-2 rounded-lg flex gap-2 ${
              isActive(link)
                ? 'bg-slate-600/50 text-slate-600 cursor-not-allowed pointer-events-none'
                : 'bg-slate-600 text-white  shadow-md hover:bg-slate-800'
            }`}
            aria-disabled={isActive(link)}
          >
            <Icon size={20} /> {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
