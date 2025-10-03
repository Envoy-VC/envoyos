"use client";

import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Transition,
  type Variant,
  type Variants,
} from "motion/react";

import { cn } from "@/lib/utils";

export type AccordionContextType = {
  expandedValue: React.Key | null;
  toggleItem: (value: React.Key) => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
}

export type AccordionProviderProps = {
  children: ReactNode;
  variants?: { expanded: Variant; collapsed: Variant };
  expandedValue?: React.Key | null;
  onValueChange?: (value: React.Key | null) => void;
  defaultOpenKey?: React.Key | null;
};

function AccordionProvider({
  children,
  variants,
  expandedValue: externalExpandedValue,
  onValueChange,
  defaultOpenKey,
}: AccordionProviderProps) {
  const [internalExpandedValue, setInternalExpandedValue] =
    useState<React.Key | null>(defaultOpenKey ?? null);

  const expandedValue =
    externalExpandedValue !== undefined
      ? externalExpandedValue
      : internalExpandedValue;

  const toggleItem = (value: React.Key) => {
    if (onValueChange) {
      onValueChange(value);
    } else {
      setInternalExpandedValue(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ expandedValue, toggleItem, variants }}>
      {children}
    </AccordionContext.Provider>
  );
}

export type AccordionProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
  variants?: { expanded: Variant; collapsed: Variant };
  expandedValue?: React.Key | null;
  onValueChange?: (value: React.Key | null) => void;
  defaultOpenKey?: React.Key | null;
};

function Accordion({
  children,
  className,
  transition,
  variants,
  expandedValue,
  onValueChange,
  defaultOpenKey,
}: AccordionProps) {
  return (
    <MotionConfig transition={transition}>
      {/** biome-ignore lint/a11y/useAriaPropsSupportedByRole: supported */}
      <div aria-orientation="vertical" className={cn("relative", className)}>
        <AccordionProvider
          defaultOpenKey={defaultOpenKey}
          expandedValue={expandedValue}
          onValueChange={onValueChange}
          variants={variants}
        >
          {children}
        </AccordionProvider>
      </div>
    </MotionConfig>
  );
}

export type AccordionItemProps = {
  value: React.Key;
  children: ReactNode;
  className?: string;
};

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { expandedValue } = useAccordion();
  const isExpanded = value === expandedValue;

  return (
    <div
      className={cn("overflow-hidden", className)}
      {...(isExpanded ? { "data-expanded": "" } : { "data-closed": "" })}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            // @ts-expect-error safe to ignore
            ...child.props,
            expanded: isExpanded,
            value,
          });
        }
        return child;
      })}
    </div>
  );
}

export type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
};

function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem, expandedValue } = useAccordion();
  const value = (props as { value?: React.Key }).value;
  const isExpanded = value === expandedValue;

  return (
    <button
      aria-expanded={isExpanded}
      className={cn("group", className)}
      onClick={() => value !== undefined && toggleItem(value)}
      type="button"
      {...(isExpanded ? { "data-expanded": "" } : { "data-closed": "" })}
    >
      {children}
    </button>
  );
}

export type AccordionContentProps = {
  children: ReactNode;
  className?: string;
};

function AccordionContent({
  children,
  className,
  ...props
}: AccordionContentProps) {
  const { expandedValue, variants } = useAccordion();
  const value = (props as { value?: React.Key }).value;
  const isExpanded = value === expandedValue;

  const BASE_VARIANTS: Variants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 },
  };

  const combinedVariants = {
    collapsed: { ...BASE_VARIANTS.collapsed, ...variants?.collapsed },
    expanded: { ...BASE_VARIANTS.expanded, ...variants?.expanded },
  };

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          animate="expanded"
          className={className}
          exit="collapsed"
          initial="collapsed"
          variants={combinedVariants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
