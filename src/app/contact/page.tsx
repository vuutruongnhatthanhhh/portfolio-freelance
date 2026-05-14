// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { SiFacebook } from "react-icons/si";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

// ✅ đọc locale & chống flicker khi zustand hydrate
import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

/* ===================== Types ===================== */
type FormErrors = Partial<Record<"name" | "email" | "message", string>>;
type Lang = "vi" | "en";

/* ===================== I18N ===================== */
const I18N = {
  vi: {
    pageTitle: "Liên hệ",
    formTitle: "Gửi lời nhắn",
    labels: {
      name: "Họ tên *",
      email: "Email *",
      phone: "Số điện thoại",
      message: "Nội dung *",
    },
    btnSend: "Gửi",
    btnSending: "Đang gửi...",
    success:
      "Cảm ơn bạn. Mình đã nhận được tin nhắn, mình sẽ phản hồi lại trong thời gian sớm nhất",
    serverError: "Gửi thất bại. Vui lòng thử lại.",
    contactInfo: "Thông tin liên lạc",
    facebook: "Facebook TJZenn",
    website: "Website TJZenn",
    location: "Biên Hòa, Đồng Nai",
    errors: {
      name: "Nhập họ tên tối thiểu 2 ký tự",
      email: "Email chưa hợp lệ",
      message: "Nội dung tối thiểu 10 ký tự",
    },
  },
  en: {
    pageTitle: "Contact",
    formTitle: "Send a message",
    labels: {
      name: "Full name *",
      email: "Email *",
      phone: "Phone number",
      message: "Message *",
    },
    btnSend: "Send",
    btnSending: "Sending...",
    success:
      "Thanks! I’ve received your message and will get back to you as soon as possible.",
    serverError: "Failed to send. Please try again.",
    contactInfo: "Contact information",
    facebook: "Facebook TJZenn",
    website: "Website TJZenn",
    location: "Bien Hoa, Dong Nai",
    errors: {
      name: "Please enter at least 2 characters",
      email: "Invalid email address",
      message: "Message must be at least 10 characters",
    },
  },
} as const;

/* ===================== Motion variants ===================== */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactPage() {
  // locale & hydrate
  const hydrated = useStoreHydrated();
  const raw = useLocaleStore((s) => s.locale);
  const lang: Lang = raw === "en" ? "en" : "vi";
  const L = I18N[lang];

  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [serverErr, setServerErr] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const validate = (fd: FormData): FormErrors => {
    const name = (fd.get("name") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const message = (fd.get("message") as string)?.trim();

    const errs: FormErrors = {};
    if (!name || name.length < 2) errs.name = L.errors.name;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errs.email = L.errors.email;
    if (!message || message.length < 10) errs.message = L.errors.message;
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // reset trạng thái cho lần submit mới
    setSent(false);
    setServerErr(null);

    const formEl = e.currentTarget as HTMLFormElement;
    const fd = new FormData(formEl);
    const errs = validate(fd);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setSent(false);
      setServerErr(null);
      return;
    }

    const name = (fd.get("name") as string).trim();
    const email = (fd.get("email") as string).trim();
    const phone = (fd.get("phone") as string)?.trim() || "—";
    const message = (fd.get("message") as string).trim();

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, locale: lang }),
      });

      // Ưu tiên đọc JSON nếu có { ok: true }, fallback coi 2xx là thành công
      let ok = res.ok;
      try {
        const data = await res.clone().json();
        if (typeof data?.ok === "boolean") ok = data.ok;
      } catch {
        /* ignore if not JSON */
      }
      if (!ok) throw new Error("SEND_FAILED");

      setSent(true);
      setServerErr(null); // đảm bảo mutually exclusive
      formEl.reset();
    } catch {
      setSent(false); // đảm bảo mutually exclusive
      setServerErr(L.serverError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      aria-busy={!hydrated}
      className={[
        "min-h-screen py-10",
        "transition-opacity duration-200",
        hydrated ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {L.pageTitle}
          </h1>
        </motion.header>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Form */}
          <motion.div variants={fadeUp}>
            <Card className="rounded-2xl border-2 border-gray-300 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-neutral-900/80">
              <form onSubmit={handleSubmit} noValidate>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {L.formTitle}
                  </h2>
                </CardHeader>

                <CardContent className="space-y-4">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <motion.div variants={fadeUp} className="space-y-2">
                      <Label htmlFor="name">{L.labels.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        aria-invalid={!!errors.name}
                        className="rounded-xl border-gray-300 dark:border-gray-700"
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-600"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div variants={fadeUp} className="space-y-2">
                      <Label htmlFor="email">{L.labels.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        aria-invalid={!!errors.email}
                        className="rounded-xl border-gray-300 dark:border-gray-700"
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-xs text-red-600"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <motion.div variants={fadeUp} className="space-y-2">
                      <Label htmlFor="phone">{L.labels.phone}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        className="rounded-xl border-gray-300 dark:border-gray-700"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="space-y-2">
                    <Label htmlFor="message">{L.labels.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={10}
                      aria-invalid={!!errors.message}
                      className="rounded-xl border-gray-300 dark:border-gray-700"
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="text-xs text-red-600"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Lỗi server */}
                  <AnimatePresence>
                    {serverErr && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="rounded-xl border border-red-600/30 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-700/40 dark:bg-red-950/30 dark:text-red-200"
                      >
                        {serverErr}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Thành công – chỉ hiện khi không có lỗi */}
                  <AnimatePresence>
                    {sent && !serverErr && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="rounded-xl border border-green-600/30 bg-green-50 px-3 py-2 text-sm text-green-800 dark:border-green-700/40 dark:bg-green-950/30 dark:text-green-200"
                      >
                        {L.success}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>

                <CardFooter className="flex items-center justify-between mt-4">
                  <motion.div whileHover={{ x: prefersReduced ? 0 : 2 }}>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="rounded-xl bg-green-700 text-white hover:bg-green-800 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {loading ? L.btnSending : L.btnSend}
                    </Button>
                  </motion.div>
                </CardFooter>
              </form>
            </Card>
          </motion.div>

          {/* Info panel */}
          <motion.div variants={fadeUp}>
            <Card className="rounded-2xl border-2 border-gray-300 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-neutral-900/70">
              <CardHeader>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {L.contactInfo}
                </h2>
              </CardHeader>

              <CardContent className="space-y-4">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <motion.a
                    variants={fadeUp}
                    href="mailto:contact.tjzenn@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-3 py-2 text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-800"
                    whileHover={{ x: prefersReduced ? 0 : 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="h-4 w-4" />
                    contact.tjzenn@gmail.com
                  </motion.a>

                  <motion.a
                    variants={fadeUp}
                    href="tel:0812303471"
                    className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-3 py-2 text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-800"
                    whileHover={{ x: prefersReduced ? 0 : 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="h-4 w-4" />
                    0812 303 471
                  </motion.a>

                  <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-3 py-2 text-black dark:border-gray-700 dark:bg-neutral-900 dark:text-slate-200"
                  >
                    <MapPin className="h-4 w-4" />
                    {L.location}
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-3"
                >
                  <motion.a
                    variants={fadeUp}
                    href="https://www.facebook.com/profile.php?id=61577630908608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-800"
                    whileHover={{ x: prefersReduced ? 0 : 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SiFacebook className="h-4 w-4 text-[#1877F2]" />
                    {L.facebook}
                  </motion.a>

                  <motion.a
                    variants={fadeUp}
                    href="https://tjzenn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-800"
                    whileHover={{ x: prefersReduced ? 0 : 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Globe className="h-4 w-4" />
                    {L.website}
                  </motion.a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
