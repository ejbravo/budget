export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const openModal = (id: string) => ({
  type: OPEN_MODAL,
  payload: id,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
});

export { openModal, closeModal };
