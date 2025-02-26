export interface LoginInput {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}

export async function loginApi({ email, password }: LoginInput): Promise<AuthResponse> {
    const response = await fetch("https://api-messenger.exiltrip.tech/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login error");
    }
    return await response.json();
}
