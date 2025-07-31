import { MdOutlinePrint } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  fetchNextCycleNumber,
  selectedDepartments,
  selectedInstruments,
  selectSelectedSterilizerId,
  setMessage,
  setPrintingPreview,
} from '../../store/features/sterilizationSlice';
import toast from 'react-hot-toast';
import SterilizationService from '../../services/sterilizationService';
import type { TSterilizationCyclePayload } from '../../types';
import { selectUser } from '../../store/features/authSlice';

export const ButtonPrint = () => {
  const dispatch = useAppDispatch();
  const sterilizerId = useAppSelector(selectSelectedSterilizerId);
  const instruments = useAppSelector(selectedInstruments);
  const user = useAppSelector(selectUser);
  const departments = useAppSelector(selectedDepartments);

  const handlePrintAction = async () => {
    if (!sterilizerId) {
      toast.error('Prašome pasirinkti sterilizatorių!');
      return;
    }

    if (instruments.length < 1) {
      toast.error('Prašome pasirinkti skyrius ir instrumentus!');
      return;
    }

    if (!user?.userId) {
      // Šita klaida beveik neįmanoma - šitą sąlygą naudoju tik dėl to,
      // kad nemestų klaidos typescript inicijuojant
      // sterilizationCycleData.userId
      toast.error('Neprisijungęs naudotojas');
      return;
    }

    // visi sterilizavimo ciklo duomenys
    const sterilizationCycleData: TSterilizationCyclePayload = {
      sterilizerId,
      userId: user.userId,
      departments,
      instruments,
      cycleNumber: await dispatch(fetchNextCycleNumber(sterilizerId)).unwrap(),
    };
    ///////////////////////////////////////////

    // 1. Sugeneruojame lipdukus
    dispatch(setMessage({ message: 'Generuojami lipdukai...' }));
    dispatch(setPrintingPreview({ value: true }));

    // 2. Įrašome duomenis į DB
    dispatch(setMessage({ message: 'Duomenys įrašomi į duomenų bazę...' }));
    const response = await SterilizationService.saveSterilizationCycle(
      sterilizationCycleData
    );

    // dar nesugalvojau, koks bus response. Tikriausiai reikia tikrinti pagal koda, t.y. kad butu 201
    // ir kokia prasmė rodyti skirtingus infoMessage, jei viskas įvyksta taip greitai, kad nespėju pamatyti :)
    if (response === 'sekmingas irasymas') {
      dispatch(
        setMessage({
          message: 'Duomenys sėkmingai įrašyti...',
        })
      );
    } else {
      toast.error('Duomenų įrašymo klaida ');
    }

    // 3. Spausdiname
    // cia reikes naudoti window print?
  };

  return (
    <button
      type='button'
      className='flex gap-1 items-center p-2 rounded-lg bg-emerald-300 cursor-pointer hover:bg-emerald-500'
      onClick={handlePrintAction}
    >
      <MdOutlinePrint size={20} />
      Spausdinti
    </button>
  );
};
