import { selectScannedInstruments } from '../../store/features/medicSlice';
import { useAppSelector } from '../../store/store';

export const QRScannedList = () => {
  const scannedInstruments = useAppSelector(selectScannedInstruments);

  return (
    <section className='w-1/2'>
      {scannedInstruments.length > 0 ? (
        <div></div>
      ) : (
        <div>Pradėkite instrumentų nuskaitymą</div>
      )}
    </section>
  );
};
