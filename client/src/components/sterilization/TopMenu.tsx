import { selectCurrentCycleNumber } from '../../store/features/sterilizationSlice';
import { useAppSelector } from '../../store/store';
import { ButtonPrint } from './ButtonPrint';
import { Link, useLocation } from 'react-router';

interface ITopMenuLink {
  name: string;
  link: string;
}

export const TopMenu = () => {
  const location = useLocation();
  const currentDate = new Date().toISOString().slice(0, 10);
  const isActive = (path: string) => location.pathname === path;

  const cycleNumber = useAppSelector(selectCurrentCycleNumber);

  const topMenuLinks: ITopMenuLink[] = [
    { name: 'Sterilizavimas', link: '/sterilizavimas' },
    { name: 'Instrumentai', link: '/sterilizavimas/instrumentai' },
    { name: 'Skyriai', link: '/sterilizavimas/skyriai' },
    { name: 'Sterilizatoriai', link: '/sterilizavimas/sterilizatoriai' },
  ];

  return (
    <div className='flex items-center justify-start gap-4 mb-2 bg-gray-200 rounded-lg py-1 px-2'>
      {/* Data */}
      <div className='w-4/12 flex gap-5 items-center justify-start'>
        <div>
          Data: <span className='text-sm font-semibold'>{currentDate}</span>
        </div>
        <ButtonPrint />
        {location.pathname === '/sterilizavimas' && (
          <h3>
            Partijos Nr. <span className='font-semibold'>{cycleNumber}</span>
          </h3>
        )}
      </div>

      {/* Admin */}
      <div className='w-8/12 flex items-center justify-end gap-5'>
        <div className='flex gap-3 items-center'>
          {topMenuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className={`p-2 rounded-lg ${
                isActive(link.link)
                  ? 'bg-slate-600/50 text-slate-600 cursor-not-allowed pointer-events-none'
                  : 'bg-slate-600 text-white  shadow-md hover:bg-slate-800'
              }`}
              aria-disabled={isActive(link.link)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
