import { DeviceType } from "@stores/layout-store";

export const parseDeviceType = (type?: string): DeviceType => {
  if (type === "mobile") return "mobile";
  if (type === "tablet") return "tablet";
  return "desktop";
};
