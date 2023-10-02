import { IFormData, IResponse } from "./InterfaceService";
import { EmailURL } from "./URLs";

/**
 *
 * @param formData
 * @returns
 */
export async function callEmailService(
  formData: IFormData
): Promise<IResponse> {
  try {
    const response = await fetch(EmailURL, {
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
