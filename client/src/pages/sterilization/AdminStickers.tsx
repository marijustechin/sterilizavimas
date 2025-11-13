import { useEffect } from 'react';
import {
  getStickers,
  selectStickers,
  setSticerListCurrentPage,
} from '../../store/features/stickerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { StickerListTable } from '../../components/sterilization/StickerListTable';
import { StickerListFilter } from '../../components/sterilization/StickerListFilter';
import { Pagination } from '../../components/Pagination';

export const AdminStickers = () => {
  const dispatch = useAppDispatch();
  const stickers = useAppSelector(selectStickers);

  useEffect(() => {
    if (stickers.status === 'idle') dispatch(getStickers());
  }, [stickers.status, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(setSticerListCurrentPage({ current: page }));
    dispatch(getStickers());
  };

  return (
    <main>
      {/* Filtrai */}
      <StickerListFilter />

      {/* Lipdukų sąrašas */}
      <StickerListTable stickers={stickers.stickers} />

      {/* Puslapiavimas */}
      <Pagination
        onChange={(current) => handlePageChange(current)}
        totalPages={stickers.totalPages}
        currentPage={stickers.currentPage}
      />
    </main>
  );
};
