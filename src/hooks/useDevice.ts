import device from "current-device";
const useDevice = () => {
	const deviceType = ref(device.type);
	const deviceOrientation = ref(device.orientation);
	const deviceOs = ref(device.os);
	return { deviceType, deviceOrientation, deviceOs };
};
export default useDevice;
