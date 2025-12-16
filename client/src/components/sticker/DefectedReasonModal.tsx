import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface DefectedReasonModalProps {
  isOpen: boolean;
  onConfirm: (reasonText: string) => void;
}

export const DefectedReasonModal: React.FC<DefectedReasonModalProps> = ({
  isOpen,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const [reasonValue, setReasonValue] = useState('Sterilizatoriaus gedimas');

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReasonValue(event.target.value);
  };

  return (
    <AnimatePresence>
      <div
        className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${
          isOpen ? 'visible bg-violet-950/50' : 'invisible'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className='bg-white p-6 rounded-2xl shadow-lg w-96 text-center'
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className='text-xl font-semibold mb-2'>Atšaukimo priežastis</h2>
          <p className='mb-4 text-xs'>
            Norodykite galimai nesterilios medicinos priemonės atšaukimo
            priežastį
          </p>
          <input
            id='reason_input'
            className='p-2 focus:outline-none w-full border border-rose-800/30 rounded-lg'
            placeholder='Sterilizatoriaus gedimas'
            onChange={handleReasonChange}
          />
          <div className='flex justify-center gap-4 mt-4'>
            <button
              onClick={() => onConfirm(reasonValue)}
              className='btn-emerald'
            >
              Patvirtinti
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
