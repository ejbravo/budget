export const types = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const { OPEN_MODAL, CLOSE_MODAL } = types;

const openModal = (id: string) => ({
  type: OPEN_MODAL,
  payload: id,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
});

export { openModal, closeModal };
