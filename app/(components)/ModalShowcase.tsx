"use client";

import { Input } from "antd";
import { useState, useSyncExternalStore } from "react";
import Button from "./Button";
import ContactCard from "./ContactCard";
import Modal from "./Modal";

export default function ModalShowcase() {
  const [plainOpen, setPlainOpen] = useState(false);
  const [coloredOpen, setColoredOpen] = useState(true);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-5xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Modal
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Title-driven modal with custom body content
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            The modal title is passed as a prop, while everything inside the
            body comes from children so the content remains fully reusable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-medium text-[#8c89b6]">
                Default header modal
              </p>
              <Button onClick={() => setPlainOpen(true)} variant="outlined">
                Open Plain Modal
              </Button>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm font-medium text-[#8c89b6]">
                Colored title modal
              </p>
              <Button onClick={() => setColoredOpen(true)}>Open Colored Modal</Button>
            </div>
          </div>
        </div>

        {mounted ? (
          <>
            <Modal
              mask={{ closable: true }}
              onClose={() => setPlainOpen(false)}
              open={plainOpen}
              title="Approve Partner"
            >
              <div className="space-y-6">
                <ContactCard
                  email="contact@techcorp.com"
                  partner="TechCorp Solutions"
                  variant="success"
                />

                <div className="space-y-2">
                  <label
                    className="block text-base font-semibold text-[#2f2a63]"
                    htmlFor="plain-partner-id"
                  >
                    Partner ID <span className="text-[#ea4335]">*</span>
                  </label>
                  <Input
                    id="plain-partner-id"
                    placeholder="Enter Partner ID"
                    size="large"
                  />
                  <p className="text-sm text-[#9a98b4]">
                    This will be assigned to the approved partner
                  </p>
                </div>

                <div className="flex flex-wrap justify-end gap-3 pt-2">
                  <Button
                    color="neutral"
                    onClick={() => setPlainOpen(false)}
                    style={{ minWidth: 120 }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => console.log("Proceed clicked")}
                    style={{ minWidth: 140 }}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            </Modal>

            <Modal
              mask={{ closable: true }}
              onClose={() => setColoredOpen(false)}
              open={coloredOpen}
              title="Approve Partner"
              titleBg="#4a47a8"
            >
              <div className="space-y-6">
                <ContactCard
                  email="contact@techcorp.com"
                  partner="TechCorp Solutions"
                  variant="danger"
                />

                <div className="space-y-2">
                  <label
                    className="block text-base font-semibold text-[#2f2a63]"
                    htmlFor="colored-partner-id"
                  >
                    Partner ID <span className="text-[#ea4335]">*</span>
                  </label>
                  <Input
                    id="colored-partner-id"
                    placeholder="Enter Partner ID"
                    size="large"
                  />
                  <p className="text-sm text-[#9a98b4]">
                    This will be assigned to the approved partner
                  </p>
                </div>

                <div className="flex flex-wrap justify-end gap-3 pt-2">
                  <Button
                    color="neutral"
                    onClick={() => setColoredOpen(false)}
                    style={{ minWidth: 120 }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => console.log("Proceed clicked")}
                    style={{ minWidth: 140 }}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            </Modal>
          </>
        ) : null}
      </section>
    </main>
  );
}
