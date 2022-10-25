import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../features/auth/authSlice";
import { AnimatePresence, motion } from "framer-motion";
const Modal = ({ children,modalCls = "w-[320px]", xButton = true }) => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.auth);

  const handleClose = (e) => {
    if (e.target.id === "modal-wrapper") dispatch(toggleModal(false));
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-dark bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={handleClose}
          id="modal-wrapper"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={`${modalCls} bg-dark rounded-xl p-5 text-white`}
          >
            {xButton && <div className="flex justify-end">
              <motion.span
                initial={{ rotateZ: 0 }}
                animate={{ rotateZ: 1440, transition: { duration: 2 } }}
                className="bg-white/10 p-2 hover:bg-white/20 mb-3 rounded-full cursor-pointer"
                onClick={() => dispatch(toggleModal(false))}
              >
                <HiOutlineX />
              </motion.span>
            </div>}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
