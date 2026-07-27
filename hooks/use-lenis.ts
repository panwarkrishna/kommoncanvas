"use client";

import { useContext } from "react";
import { LenisContext } from "@/lib/lenis-context";

/**
 * Access the shared Lenis smooth-scroll instance provided by
 * <SmoothScrollProvider>. Returns null if used outside the provider
 * or before the instance has mounted.
 */
export function useLenis() {
  return useContext(LenisContext);
}
