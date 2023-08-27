import { BaseUrlHost } from "@/utils/common/baseUrl";
import { hashPassword } from "@/utils/common/hash";
import { emailValidator } from "@/utils/zodEmail";
import axios from "axios";

export interface ReqBody {
  email: string;
  password: string;
}

export async function processSignupServices({
  email,
  password,
}: ReqBody): Promise<any> {
  let errorMessage;
  const hashedPassword = hashPassword(password);
  try {
    // Check if email is valid
    try {
      emailValidator.parse(email);
    } catch (error) {
      errorMessage = "Invalid email address.";
    }

    // Check if name is valid (you can add more validation if needed)

    const url = `${BaseUrlHost}/auth/signup`; // Adjust the endpoint URL
    const payload = { email, hashedPassword };
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
