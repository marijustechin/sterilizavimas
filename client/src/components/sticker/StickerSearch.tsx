import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectStickersSearchString,
  setFilterSearchString,
} from '../../store/features/stickerSlice';

interface ISearchProps {
  placeholderText: string;
  // grazina paieskos teksta
  onSearch: (searchString: string) => void;
  width: number;
}

export const StickerSearch = ({
  placeholderText,
  onSearch,
  width,
}: ISearchProps) => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(selectStickersSearchString);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cleanText = searchText.replace(/[^A-z0-9À-ž._\s]/gi, '');
      onSearch(cleanText.toLocaleLowerCase());
    }
  };

  const handleClearSearch = () => {
    dispatch(setFilterSearchString({ text: '' }));
    onSearch('');
  };

  return (
    <div
      className={`flex items-center border border-rose-800/50 rounded-lg w-${width}`}
    >
      <input
        className='px-2 py-1 flex-grow bg-transparent focus:outline-none'
        value={searchText}
        onChange={(e) =>
          dispatch(setFilterSearchString({ text: e.target.value }))
        }
        onKeyUp={handleSearch}
        id={placeholderText}
        type='text'
        autoComplete='off'
        placeholder={placeholderText}
        aria-label={`Search for ${placeholderText}`}
      />
      <button
        onClick={handleClearSearch}
        className={`${
          searchText ? 'visible' : 'invisible'
        } mr-1 cursor-pointer`}
      >
        ❌
      </button>
    </div>
  );
};
