import {AuthResponse} from "../../login/api/auth.ts";

export interface RegisterInput {
    fullname: string;
    email: string;
    password: string;
}
export async function registerApi({ fullname, email, password }: RegisterInput): Promise<AuthResponse> {
    const response = await fetch("https://api-messenger.exiltrip.tech/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration error");
    }
    return await response.json();
}