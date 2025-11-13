import HelperService from '../../services/helperService';
import {
  getStickers,
  resetStickerFilters,
  selectStickers,
  setFilterCycleNumber,
  setFilterDepartmentId,
  setFilterInstrumentId,
  setFilterLimit,
} from '../../store/features/stickerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const StickerListFilter = () => {
  const dispatch = useAppDispatch();
  const stickers = useAppSelector(selectStickers);

  const handleCycleNumberChange = (cycleNumber: string) => {
    const filterValue = HelperService.getPositiveNumberOrUndefined(cycleNumber);
    dispatch(setFilterCycleNumber({ cycleNumber: filterValue }));
    dispatch(getStickers());
  };

  const handleDepartmentIdChange = (departmentId: string) => {
    const filterValue =
      HelperService.getPositiveNumberOrUndefined(departmentId);
    dispatch(setFilterDepartmentId({ departmentid: filterValue }));
    dispatch(getStickers());
  };

  const handleInstrumentIdChange = (instrumentId: string) => {
    const filterValue =
      HelperService.getPositiveNumberOrUndefined(instrumentId);
    dispatch(setFilterInstrumentId({ instrumentid: filterValue }));
    dispatch(getStickers());
  };

  const handleShowInPageChange = (value: string) => {
    const filterValue = HelperService.getPositiveNumberOrUndefined(value);
    dispatch(setFilterLimit({ limit: filterValue }));
    dispatch(getStickers());
  };

  const resetFilters = () => {
    dispatch(resetStickerFilters());
    dispatch(getStickers());
  };

  return (
    <div className='flex gap-3 items-center border-b border-gray-200 py-1'>
      <div className='font-semibold'>Rodyti puslapyje: </div>
      <select
        id='showinpage'
        className='px-2 py-1 border border-rose-800/50 rounded-lg focus:outline-none'
        defaultValue={15}
        onChange={(e) => handleShowInPageChange(e.target.value)}
      >
        <option value={15}>15</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
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
  );
};
