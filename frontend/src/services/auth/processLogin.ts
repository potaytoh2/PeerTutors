import { BaseUrlHost } from "@/utils/common/baseUrl";
import { emailValidator } from "@/utils/zodEmail";
import axios from "axios";

interface ReqBody {
  email: string;
  password: string;
}

export async function processSignupServices({
  email,
  password,
}: ReqBody): Promise<any> {
  let errorMessage;

  try {
    // Check if email is valid
    try {
      emailValidator.parse(email);
    } catch (error) {
      errorMessage = "Invalid email address.";
    }

    const url = `${BaseUrlHost}/auth/login`;
    const payload = { email, password };
    const response = await axios.post(url, payload);
    if (response.status !== 201) {
      errorMessage = "Unable to create user. Please try again in a while.";
      return errorMessage;
    }

    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
