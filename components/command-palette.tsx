"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { work, projects } from "@/content/site";
import { commandPaletteCopy } from "@/lib/command-palette-copy";

const pages = [
  { key: "index", href: "/" },
  { key: "work", href: "/work" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/#contact" },
] as const;

type CommandPaletteContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null
);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    throw new Error(
      "useCommandPalette must be used within CommandPaletteProvider"
    );
  }
  return ctx;
}

export function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const isEditable =
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable;

    if (e.key === "/" && !isEditable && !e.repeat) {
      e.preventDefault();
      setOpen(true);
      return;
    }

    if ((e.metaKey || e.ctrlKey) && e.key === "k" && !e.repeat) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <AnimatePresence>
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="fixed inset-0 z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 bg-ink/40"
              onClick={() => setOpen(false)}
            />
            <div className="mx-auto flex h-full w-full max-w-6xl items-start px-5 pt-24 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="w-full"
              >
                <Command
                  className="overflow-hidden"
                  loop
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setOpen(false);
                    }
                  }}
                >
                  <Command.Input
                    ref={inputRef}
                    placeholder={commandPaletteCopy.placeholder}
                    className="w-full bg-transparent py-2 font-mono text-sm text-paper placeholder:text-caption outline-none"
                  />
                  <Command.List className="mt-6 max-h-80 overflow-y-auto">
                    <Command.Empty className="py-6 font-mono text-sm text-caption">
                      {commandPaletteCopy.empty}
                    </Command.Empty>

                    <Command.Group
                      heading={commandPaletteCopy.groups.work}
                      className="[&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-caption"
                    >
                      {work.map((item) => (
                        <Command.Item
                          key={item.slug}
                          value={item.title}
                          onSelect={() => navigate(`/work/${item.slug}`)}
                          className="group flex cursor-pointer items-center gap-2 py-1.5 text-stone transition-colors duration-150 data-[selected=true]:text-paper"
                        >
                          <span className="w-2 text-gold opacity-0 group-data-[selected=true]:opacity-100">▎</span>
                          <span className="flex-1 font-sans text-sm">{item.title}</span>
                          <span className="font-mono text-xs text-caption">
                            {item.client}
                          </span>
                        </Command.Item>
                      ))}
                    </Command.Group>

                    <Command.Group
                      heading={commandPaletteCopy.groups.projects}
                      className="mt-6 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-caption"
                    >
                      {projects.map((item) => (
                        <Command.Item
                          key={item.slug}
                          value={item.title}
                          onSelect={() => navigate(`/projects/${item.slug}`)}
                          className="group flex cursor-pointer items-center gap-2 py-1.5 text-stone transition-colors duration-150 data-[selected=true]:text-paper"
                        >
                          <span className="w-2 text-gold opacity-0 group-data-[selected=true]:opacity-100">▎</span>
                          <span className="flex-1 font-sans text-sm">{item.title}</span>
                          <span className="font-mono text-xs text-caption">
                            {item.tagline}
                          </span>
                        </Command.Item>
                      ))}
                    </Command.Group>

                    <Command.Group
                      heading={commandPaletteCopy.groups.pages}
                      className="mt-6 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-caption"
                    >
                      {pages.map((page) => {
                        const label = commandPaletteCopy.pageLabels[page.key];
                        return (
                          <Command.Item
                            key={page.href}
                            value={label}
                            onSelect={() => navigate(page.href)}
                            className="group flex cursor-pointer items-center gap-2 py-1.5 font-sans text-sm text-stone transition-colors duration-150 data-[selected=true]:text-paper"
                          >
                            <span className="w-2 text-gold opacity-0 group-data-[selected=true]:opacity-100">▎</span>
                            {label}
                          </Command.Item>
                        );
                      })}
                    </Command.Group>
                  </Command.List>

                  <div className="mt-6 border-t border-stone/15 pt-3 font-mono text-xs text-caption">
                    {commandPaletteCopy.footer}
                  </div>
                </Command>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </CommandPaletteContext.Provider>
  );
}
