import { http } from "@/utils/http";
import { vueRequest } from "@/utils";
import { LoginForm, LoginRef } from "./type";

export const login = vueRequest((data: LoginForm): Promise<LoginRef> => {
	return http.post<LoginRef>("/login", data);
});
export const dogApi = vueRequest(() => {
	return http.get("api/breeds/image/random");
});

export const dogApi2 = () => {
	return http.get("api/breeds/image/random");
};
