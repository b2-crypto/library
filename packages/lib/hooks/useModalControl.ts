import { useCallback, useState } from 'react';

export const useModalControl = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = useCallback(() => setModalVisible(true), []);
  const hideModal = useCallback(() => setModalVisible(false), []);

  return {
    modalVisible,
    showModal,
    hideModal,
  };
};
