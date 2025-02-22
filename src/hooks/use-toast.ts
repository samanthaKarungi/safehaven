import toast from 'react-hot-toast';

interface ToastOptions {
  duration?: number;
  position?: 'top-center' | 'top-right' | 'top-left' | 'bottom-center' | 'bottom-right' | 'bottom-left';
}

export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' = 'success', options: ToastOptions = {}) => {
    const defaultOptions = {
      duration: 3000,
      position: 'top-center' as const,
      ...options,
    };

    if (type === 'success') {
      toast.success(message, defaultOptions);
    } else if (type === 'error') {
      toast.error(message, defaultOptions);
    }
  };

  return {
    toast: showToast,
  };
};