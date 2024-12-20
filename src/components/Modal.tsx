import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

const Modal = ({ isOpen, title, content, onClose }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          
        >
          <motion.div
            key="modal-content"  // Unique key for the content to handle re-renders
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 ,scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            exit={{ opacity: 0 , scale: 0}}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">{content}</p>
            <button
              onClick={onClose}
              className="bg-primary-text text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
