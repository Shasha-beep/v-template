import { useRequest } from "vue-request";
import useCurrying from "@/hooks/useCurrying";

export const baseStaticUrl = (src: string): string => {
	const { VITE_APP_STATIC_URL } = import.meta.env;
	if (src) {
		return `${VITE_APP_STATIC_URL}${src}`;
	}

	return VITE_APP_STATIC_URL;
};
export const vueRequest = useCurrying(useRequest);
