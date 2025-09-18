import { QRScanner } from '../components/qrScanner/qrScanner';
import { QRScannedList } from '../components/qrScanner/qrScannedList';
import { QRScannerMenu } from '../components/qrScanner/qrScannerMenu';

export const MedicPage = () => {
  return (
    <main className='flex flex-col gap-3'>
      <QRScannerMenu />
      <div className='flex gap-3'>
        <QRScanner />
        <QRScannedList />
      </div>
    </main>
  );
};
