"use client";
import type { ToastInstance } from "../Toasts";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useToastContext } from "@/context/global";
import { getErrorMessage } from "@/lib/auth/errorCodes";

export default function AuthError() {
  const { toast } = useToastContext();
  const errorCode = useSearchParams().get("error");
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current || !errorCode) return;

    toast(getErrorMessage(errorCode), {
      type: "error",
      timeout: 0,
    });

    isMounted.current = true;
  }, [errorCode, toast]);

  return null;
}
