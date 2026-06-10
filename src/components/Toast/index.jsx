import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastProvider({ position = 'top-right', autoClose = 3000 }) {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover/>
  );
}

export function useToast() {
  function notifySuccess(message = 'Operação realizada com sucesso!') {toast.success(message);}

  function notifyError(message = 'Ocorreu um erro. Tente novamente.') {toast.error(message);}

  function notifyInfo(message = 'Atenção!') {toast.info(message);}
  
  return { notifySuccess, notifyError, notifyInfo};
}