import { createStorageService } from "../../shared/src/services/localStorageService.js";

const CITAS_STORAGE_KEY = "fe-react-app-citas";

const citasStorage = createStorageService(CITAS_STORAGE_KEY, []);

export const getCitas = citasStorage.get;
export const saveCitas = citasStorage.save;
export const clearCitas = citasStorage.clear;