"use client";

import useLayoutStore, { DeviceType } from "@stores/layout-store";
import { useEffect } from "react";

const Providers: React.FC<{ device: DeviceType }> = ({ device }) => {
  const { initializeDimensions } = useLayoutStore();
  useEffect(() => {
    initializeDimensions(device);
    // eslint-disable-next-line
  }, []);
  return null;
};

export default Providers;
