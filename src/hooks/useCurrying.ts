const useCurrying = (fn: Function) => {
	const l: number = fn.length;
	return function curried(...args: any) {
		if (args.length >= l) {
			return fn(...args);
		}
		return (...prev: any) => curried(...args, ...prev);
	};
};
export default useCurrying;
