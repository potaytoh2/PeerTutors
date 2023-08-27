import { BaseUrlHost } from "@/utils/common/baseUrl";
import { defaultUid } from "@/utils/common/defaultUid";
import axios from "axios";

interface UpdateInstituteInterface {
  id: string;
  created_by?: string;
  updated_by?: string;
}
export async function createInstituteService({
  id,
  created_by,
  updated_by,
  ...otherArguments
}: UpdateInstituteInterface): Promise<any> {
  let errorMessage: string;
  try {
    updated_by = defaultUid;
    const payload = {
      created_by: defaultUid,
      updated_by,
      ...otherArguments,
    };
    const url = `${BaseUrlHost}/institute/${id}`;
    const response = await axios.post(url, payload);
    if (response.data.status !== 200) {
      errorMessage = "Unable to update Institute. Please try again in a while.";
      return errorMessage;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
