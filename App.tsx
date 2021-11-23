import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Text, Box } from "native-base";

import Home from "./screens/Home"
export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
