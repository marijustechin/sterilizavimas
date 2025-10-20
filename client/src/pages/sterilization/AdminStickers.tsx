import { useEffect } from 'react';
import {
  getStickers,
  resetStickerFilters,
  selectStickers,
  setFilterCycleNumber,
  setFilterDepartmentId,
  setFilterInstrumentId,
} from '../../store/features/stickerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import HelperService from '../../services/helperService';
import { StickerSuccessToggleCheckbox } from '../../components/sticker/StickerSuccessToggleCheckbox';

export const AdminStickers = () => {
  const dispatch = useAppDispatch();
  const stickers = useAppSelector(selectStickers);

  useEffect(() => {
    if (stickers.status === 'idle') dispatch(getStickers());
  }, [stickers.status, dispatch]);

  const handleCycleNumberChange = (cycleNumber: string) => {
    const filterValue = getPositiveNumberOrUndefined(cycleNumber);
    dispatch(setFilterCycleNumber({ cycleNumber: filterValue }));
    dispatch(getStickers());
  };

  const handleDepartmentIdChange = (departmentId: string) => {
    const filterValue = getPositiveNumberOrUndefined(departmentId);
    dispatch(setFilterDepartmentId({ departmentid: filterValue }));
    dispatch(getStickers());
  };

  const handleInstrumentIdChange = (instrumentId: string) => {
    const filterValue = getPositiveNumberOrUndefined(instrumentId);
    dispatch(setFilterInstrumentId({ instrumentid: filterValue }));
    dispatch(getStickers());
  };

  const resetFilters = () => {
    dispatch(resetStickerFilters());
    dispatch(getStickers());
  };

  /**
   * Konvertuoja filtro įvesties eilutę į teigiamą skaičių arba undefined.
   * @param value Įvesties eilutė iš input lauko (e.g., e.target.value).
   * @returns Teigiamas skaičius (> 0) arba undefined.
   */
  const getPositiveNumberOrUndefined = (value: string): number | undefined => {
    const trimmedValue = value.trim();

    // 1. Jei eilutė tuščia, grąžiname undefined
    if (trimmedValue === '') {
      return undefined;
    }

    // 2. Bandome paversti į skaičių
    const num = Number(trimmedValue);

    // 3. Patikriname, ar tai tikras skaičius (ne NaN) ir ar jis > 0
    // NaN > 0 grąžins false, todėl num > 0 veikia kaip validacija
    if (num > 0) {
      return num;
    }

    // 4. Jei įvestis buvo neteisinga (pvz., tekstas) arba skaičius <= 0, grąžiname undefined
    return undefined;
  };

  return (
    <main>
      {/* Filtrai */}
      <div className='flex gap-3 items-center border-b border-gray-200 py-1'>
        <div className='font-semibold'>Filtruoti pagal: </div>
        <div>
          partijos nr:{' '}
          <input
            className='input-filter'
            type='number'
            id='cycle_id'
            onChange={(e) => handleCycleNumberChange(e.target.value)}
            value={stickers.cycleNumber ?? ''}
          />
        </div>
        <div>
          skyrius:{' '}
          <input
            className='input-filter'
            type='number'
            id='department_id'
            value={stickers.departmentid ?? ''}
            onChange={(e) => handleDepartmentIdChange(e.target.value)}
          />
        </div>
        <div>
          instrumentas:{' '}
          <input
            className='input-filter'
            type='number'
            id='instrument_id'
            value={stickers.instrumentid ?? ''}
            onChange={(e) => handleInstrumentIdChange(e.target.value)}
          />
        </div>
        {(stickers.cycleNumber ||
          stickers.departmentid ||
          stickers.instrumentid) && (
          <button type='button' className='btn-rose' onClick={resetFilters}>
            ❌ Nefiltruoti
          </button>
        )}
      </div>

      {/* Lipdukų sąrašas */}

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
          {stickers.stickers.length === 0 ? (
            <tr>
              <td colSpan={6} className='text-center py-4 text-gray-500'>
                Instrumentų duomenų bazėje nėra.
              </td>
            </tr>
          ) : (
            stickers.stickers.map((sticker) => (
              <tr
                className={`border-b border-rose-950/40 last:border-none ${
                  sticker.success ? '' : 'bg-rose-200'
                }`}
                key={sticker.id}
              >
                <td className='text-center text-xs'>{sticker.short_code}</td>
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
                <td className='text-center pt-1'>
                  <StickerSuccessToggleCheckbox
                    success={sticker.success}
                    short_code={sticker.short_code}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  );
};
