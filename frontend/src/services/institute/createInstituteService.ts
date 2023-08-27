import { BaseUrlHost } from "@/utils/common/baseUrl";
import axios from "axios";

interface InstituteInterface {
  name: string;
  created_by: string;
  updated_by?: string;
}
export async function createInstituteService({
  name,
  created_by,
  updated_by,
}: InstituteInterface): Promise<any> {
  let errorMessage: string;
  try {
    let updated;

    if (updated_by) {
      updated = updated_by;
    }
    const payload = { name: name, created_by: created_by, updated_by: updated };
    const url = `${BaseUrlHost}/institute`;
    const response = await axios.post(url, payload);
    if (response.data.status !== 201) {
      errorMessage = "Unable to create Institute. Please try again in a while.";
      return errorMessage;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
