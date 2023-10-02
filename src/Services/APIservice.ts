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
  let emailResponse: IResponse;
  try {
    const response = await fetch(EmailURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log(response);
      emailResponse = {
        error: true,
        data: response.status,
      };
    }

    const data = response.json();
    emailResponse = {
      error: false,
      data: data,
    };
    return emailResponse;
  } catch (exp: any) {
    console.log(exp.message);
    return {
      error: true,
      data: exp.message,
    };
  }
}
