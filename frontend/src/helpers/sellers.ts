import API from "../services/api";
import { iSeller } from "./interfaces";

/**
 *
 * @returns Returns a list of sellers in the platform
 */
export const getSellers = async (): Promise<iSeller[]> => {
  const { data } = await API.get("/seller");

  return data;
};

/**
 *
 * @param id Seller id
 * @returns Returns a single seller
 */
export const getSeller = async (id: number | string): Promise<iSeller> => {
  const { data } = await API.get(`/seller/${id}`);

  return data;
};
