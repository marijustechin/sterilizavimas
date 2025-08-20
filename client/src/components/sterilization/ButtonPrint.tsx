import { MdOutlinePrint } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  fetchNextCycleNumber,
  resetSterilizationState,
  selectedInstruments,
  selectSelectedSterilizerId,
  setMessage,
  setPrintingPreview,
} from '../../store/features/sterilizationSlice';
import toast from 'react-hot-toast';
import SterilizationService from '../../services/sterilizationService';
import type {
  TInstrument,
  TInstrumentsOfDepartment,
  TSterilizationCyclePayload,
} from '../../types';
import { selectUser } from '../../store/features/authSlice';
import { useLocation } from 'react-router';
import HelperService from '../../services/helperService';
import { selectDepartements } from '../../store/features/departmentSlice';
import { useState } from 'react';

export const ButtonPrint = () => {
  const dispatch = useAppDispatch();
  const sterilizerId = useAppSelector(selectSelectedSterilizerId);
  const instruments = useAppSelector(selectedInstruments);
  const departments = useAppSelector(selectDepartements);
  const user = useAppSelector(selectUser);

  const location = useLocation();

  const [printDisabled, setPrintDisabled] = useState<boolean>(false);

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
    const dropzoneRegex = /^department-dropzone-(\d+)$/;

    const departmentsAndInstruments: TInstrumentsOfDepartment[] =
      instruments.reduce<
        {
          departmentId: number;
          department_code: number;
          instruments: TInstrument[];
        }[]
      >((acc, instrument) => {
        const match = dropzoneRegex.exec(instrument.departmentId);
        if (match) {
          const departmentId = Number(match[1]);
          // Surandame atitinkamą skyriaus objektą iš departments masyvo
          const departmentInfo = departments.find((d) => d.id === departmentId);

          if (departmentInfo) {
            let department = acc.find((d) => d.departmentId === departmentId);
            if (!department) {
              department = {
                departmentId,
                department_code: departmentInfo.department_code, // Pridedame department_code
                instruments: [],
              };
              acc.push(department);
            }
            department.instruments.push(instrument.instrument);
          }
        }
        return acc;
      }, []);

    const sterilizationCycleData: TSterilizationCyclePayload = {
      sterilizerId,
      userId: user.userId,
      cycleNumber: await dispatch(fetchNextCycleNumber(sterilizerId)).unwrap(),
      departmentsAndInstruments: departmentsAndInstruments,
    };

    ///////////////////////////////////////////
    setPrintDisabled(true);
    // 1. Sugeneruojame lipdukus
    dispatch(setPrintingPreview({ value: true }));

    // 2. Siunčiame duomenis į backend
    // spausdinimui ir įrašymui į DB
    dispatch(
      setMessage({ message: 'Vyksta spausdinimas ir įrašymas duomenų bazę...' })
    );

    try {
      await SterilizationService.saveSterilizationCycle(sterilizationCycleData);

      // dar čia reikia nunulinti redux būseną
      toast.success('Duomenys sėkmingai įrašyti');
      dispatch(setMessage({ message: '' }));
      dispatch(resetSterilizationState());
    } catch (error) {
      toast.error(HelperService.errorToString(error));
    }

    setPrintDisabled(false);
  };

  if (location.pathname === '/sterilizavimas') {
    return (
      <button
        disabled={printDisabled}
        type='button'
        className='flex gap-1 items-center p-2 rounded-lg bg-emerald-300 cursor-pointer hover:bg-emerald-500'
        onClick={handlePrintAction}
      >
        <MdOutlinePrint size={20} />
        Spausdinti ({instruments.length})
      </button>
    );
  } else {
    return;
  }
};
