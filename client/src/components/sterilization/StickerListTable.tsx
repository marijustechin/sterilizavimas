import HelperService from '../../services/helperService';
import { selectStickersOnlyDefected } from '../../store/features/stickerSlice';
import { useAppSelector } from '../../store/store';
import type { TSticker } from '../../types';
import { StickerSuccessToggleCheckbox } from '../sticker/StickerSuccessToggleCheckbox';

interface StickerListTableProps {
  stickers: TSticker[];
}

export const StickerListTable = ({ stickers }: StickerListTableProps) => {
  const onlyDefected = useAppSelector(selectStickersOnlyDefected);

  return (
    <table className='w-full text-left mt-5'>
      <thead className='uppercase bg-slate-200 text-center'>
        <tr>
          <th>ID</th>
          <th>Data</th>
          <th>Laikas</th>
          <th>Partijos Nr.</th>
          <th>Instrumentas</th>
          <th>Skyrius</th>
          <th>Blogas (pažymėti)</th>
        </tr>
      </thead>
      <tbody>
        {stickers.length === 0 ? (
          <tr>
            <td colSpan={6} className='text-center py-4 text-gray-500'>
              Nėra ką rodyti...
            </td>
          </tr>
        ) : (
          stickers.map((sticker) => (
            <tr
              className={`border-b border-rose-950/40 last:border-none ${
                sticker.success ? '' : 'bg-rose-200'
              }`}
              key={sticker.id}
            >
              <td className='text-center text-xs font-semibold'>
                {sticker.short_code}
              </td>
              <td className='text-center'>
                {HelperService.dateStringToDate(
                  sticker.cycle.sterilization_date,
                  true,
                  false
                )}
              </td>
              <td className='text-center'>
                {HelperService.dateStringToDate(
                  sticker.cycle.sterilization_date,
                  false,
                  true
                )}
              </td>
              <td className='text-center'>{sticker.cycle.cycle_number}</td>
              <td>{sticker.instrument.instrument_name}</td>
              <td>{sticker.department.department_name}</td>
              <td className='flex gap-2 items-center justify-center p-1'>
                <StickerSuccessToggleCheckbox
                  success={sticker.success}
                  short_code={sticker.short_code}
                />
                {onlyDefected && (
                  <p className='text-xs font-light'>
                    ({sticker.successPerson})
                  </p>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
