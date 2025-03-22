"use client";

import useLayoutStore from "@stores/layout-store";
import { parseDeviceType } from "@utils/index";
import { useEffect } from "react";

const Providers: React.FC<{ device?: string }> = ({ device }) => {
  const { initializeDimensions } = useLayoutStore();
  useEffect(() => {
    initializeDimensions(parseDeviceType(device));
    // eslint-disable-next-line
  }, []);
  return null;
};

export default Providers;
