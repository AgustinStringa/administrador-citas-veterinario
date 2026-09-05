const CITAS_STORAGE_KEY = "fe-react-app-citas";

export const getCitas = () => {
  const citas = JSON.parse(localStorage.getItem(CITAS_STORAGE_KEY));
  return citas || [];
};

export const saveCitas = (citas) => {
  localStorage.setItem(CITAS_STORAGE_KEY, JSON.stringify(citas));
};