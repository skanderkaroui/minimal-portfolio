"use client"

import { type FormEvent, useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const SUBMIT_COOLDOWN_MS = 5 * 60 * 1000;
const SUCCESS_CACHE_PREFIX = "blog-email-subscribe-success";
const SUCCESS_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function BlogEmailSubscribeForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "exists"
  >("idle");
  const [message, setMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const storageKey = `${SUCCESS_CACHE_PREFIX}:${typeof window === "undefined" ? "" : window.location.pathname}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const raw = localStorage.getItem(storageKey);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as {
        email: string;
        status: "success";
        timestamp: number;
      };

      if (parsed?.status !== "success") return;

      const isFresh = Number.isFinite(parsed.timestamp)
        && Date.now() - parsed.timestamp < SUCCESS_CACHE_TTL_MS;

      if (!isFresh) {
        localStorage.removeItem(storageKey);
        return;
      }

      if (parsed.email) {
        setSubmittedEmail(parsed.email);
        setStatus("success");
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, [storageKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "")
      .trim()
      .toLowerCase();
    const honeypot = String(formData.get("_gotcha") ?? "").trim();

    if (honeypot) {
      setStatus("success");
      setSubmittedEmail(email);
      return;
    }

    if (!email) {
      setStatus("error");
      setMessage("Please provide a valid email.");
      return;
    }

    const storageKey = `blog-email-subscribe-${email}`;
    const lastSubmitAt = Number(localStorage.getItem(storageKey) || 0);
    const now = Date.now();

    if (Number.isFinite(lastSubmitAt) && now - lastSubmitAt < SUBMIT_COOLDOWN_MS) {
      setStatus("exists");
      setMessage("we got your email, don't spam us :)");
      return;
    }

    try {
      const response = await fetch("https://submit-form.com/fwnVjhiTF", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      localStorage.setItem(storageKey, String(now));
      setSubmittedEmail(email);
      localStorage.setItem(
        `${SUCCESS_CACHE_PREFIX}:${window.location.pathname}`,
        JSON.stringify({
          status: "success" as const,
          email,
          timestamp: now,
        }),
      );
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Unable to send right now. Try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto mt-4 flex w-full max-w-md flex-col sm:flex-row gap-3 items-start sm:items-end">
        <label htmlFor="email-success" className="sr-only">
          Email
        </label>
        <input
          id="email-success"
          value={submittedEmail}
          readOnly
          aria-label="Email address"
          className="w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:bg-background dark:text-foreground"
        />
        <Button
          type="button"
          className="w-full sm:w-auto animate-pulse"
          disabled
        >
          <Check className="mr-2 h-4 w-4 text-emerald-500" />
          Sent
        </Button>
      </div>
    );
  }

    return (
      <form
        action="https://submit-form.com/fwnVjhiTF"
        method="POST"
        onSubmit={handleSubmit}
        className="mx-auto mt-4 flex w-full max-w-md flex-col sm:flex-row gap-3 items-start sm:items-end"
      >
        <input
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row gap-3 items-start sm:items-end">
          <div className="w-full flex-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-label="Email address"
              placeholder="boukraa@gmail.com"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:bg-background dark:text-foreground"
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Send"}
          </Button>
        </div>
        {message ? (
          <p
            className={`w-full self-center text-center text-sm ${status === "error" || status === "exists" ? "text-destructive" : "text-muted-foreground"}`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
