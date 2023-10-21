import { IFormData, IResponse } from "./InterfaceService";
import { Constant } from "./ConstantsService";
import ContactForm from "../Components/Contact/Private/ContactForm";

/**
 *
 * @param formData
 * @returns
 */
export async function callEmailService(
  formData: IFormData
): Promise<IResponse> {
  try {
    const response = await fetch(Constant.URL.NotifyURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.error("Request failed with status:", response.status);
      return {
        error: true,
        data: response.status,
      };
    }

    const data = await response.json();
    return {
      error: false,
      data: data,
    };
  } catch (exp: any) {
    console.error("An error occurred:", exp.message);
    return {
      error: true,
      data: exp.message,
    };
  }
}
/**
 * 
 * @param formData 
 * @returns 
 */
export async function callSMSService(
  formData: IFormData
): Promise<IResponse> {
  try {
    const response = await fetch(Constant.URL.SMSURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status != 200) {
      console.error("Request failed with status:", response.status);
      return {
        error: true,
        data: response.status,
      };
    }

    return {
      error: false,
      data: response.status,
    };
  } catch (exp: any) {
    console.error("An error occurred:", exp.message);
    return {
      error: true,
      data: exp.message,
    };
  }
}
