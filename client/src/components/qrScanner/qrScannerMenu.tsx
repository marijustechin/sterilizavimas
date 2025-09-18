import toast from 'react-hot-toast';
import { SelectPatient } from './selectPatient';
import styles from './styles/qrScannerMenu.module.css';

export const QRScannerMenu = () => {
  const handleSave = () => {
    //dispatch(saveUsedInstruments())
    toast.success('Panaudoti instrumentai įrašyti į duomenų bazę');
  };

  return (
    <section className='flex gap-3'>
      <div>
        <SelectPatient />
      </div>
      <button className={styles.button}>Pradeti QR nuskaitymą</button>
      <button className={styles.button} onClick={handleSave}>
        Įrašyti panaudotus instrumentus
      </button>
    </section>
  );
};
