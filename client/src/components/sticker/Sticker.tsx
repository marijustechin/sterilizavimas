// Reikalingi duomenys
// Data, galiojimo data, sterilizatorius, ciklas, darbuotojas, skyrius, instrumentas

// Į QR kodą dedama tokia informacija, kad ją nuskaičius būtų gaunami iš duomenų bazės
// duomenys konkrečiai idenfifikuojantys instrumentą ir jo dezinfekavimą

import { selectUser } from '../../store/features/authSlice';
import type { ISelectedInstrument } from '../../store/features/sterilizationSlice';
import { useAppSelector } from '../../store/store';
import type { TDepartment } from '../../types';

import { format, addMonths } from 'date-fns';
import QRCode from 'react-qr-code';

interface IStickerProps {
  sterilizerId: number | null;
  instrument: ISelectedInstrument;
  department: TDepartment;
  cycleNumber: number | null;
}

export const Sticker = ({
  sterilizerId,
  cycleNumber,
  instrument,
  department,
}: IStickerProps) => {
  const employee = useAppSelector(selectUser);
  const today = new Date();
  const dateEnd = addMonths(today, 6);
  const formattedDateNow = format(today, 'yyyy-MM-dd');
  const formattedDateEnd = format(dateEnd, 'yyyy-MM-dd');

  const qrValue = JSON.stringify({
    s: sterilizerId,
    c: cycleNumber,
    d: department.id,
    i: instrument.instrument.id,
  });

  return (
    <div
      className='border border-black flex py-1 flex-col items-center justify-between text-[10px] leading-[1] print:break-inside-avoid rounded-sm'
      style={{
        width: '106px', // 2.8 cm
        height: '87px', // 2.3 cm
      }}
    >
      <div>{formattedDateNow}</div>
      <div className='w-[90%] h-[6px] bg-rose-300'></div>
      <div>{formattedDateEnd}</div>
      <div className='flex gap-1 justify-around items-center'>
        <div className='flex flex-col gap-1'>
          <div>
            {sterilizerId}-{cycleNumber}
          </div>
          <div>
            {department.department_code}-{instrument.instrument.instrument_code}
          </div>
        </div>
        <QRCode value={qrValue} size={46} style={{ marginTop: '1px' }} />
      </div>
    </div>
  );
};
