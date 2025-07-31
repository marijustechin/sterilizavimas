import { motion, AnimatePresence } from 'framer-motion';

interface ConfirmationModalProps {
  isOpen: boolean;
  title?: string;
  message: string | undefined;
  onConfirm: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  children,
}) => {
  if (!isOpen) return null;

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
          <h2 className='text-xl font-semibold mb-2'>{title}</h2>

          <p className='mb-4'>{message}</p>

          {children}

          <div className='flex justify-center gap-4'>
            <button onClick={onCancel} className='btn-rose w-20'>
              Ne
            </button>
            <button onClick={onConfirm} className='btn-emerald w-20'>
              Taip
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
