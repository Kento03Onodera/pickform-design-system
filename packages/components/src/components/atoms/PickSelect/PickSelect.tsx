import React, { useState } from 'react';

// Icons
const ChevronDownIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
    </svg>
);

// Sub-component: SelectText
type SelectTextProps = {
    className?: string;
    hasValue?: boolean;
    placeholder?: string;
    label?: string;
    showLabel?: boolean;
    showTextValue?: boolean;
};

const SelectText = ({
    className = "",
    hasValue = true,
    placeholder = "選択してください",
    label = "value",
    showLabel = false,
    showTextValue = true,
}: SelectTextProps) => {
    // Logic from Figma:
    // isHasValueAndTrueAndFalse = hasValue && showTextValue && !showLabel;
    // isNotHasValueAndTrueAndFalse = !hasValue && showTextValue && !showLabel;

    // Simplified:
    // If hasValue -> show label (value)
    // If !hasValue -> show placeholder

    const showValue = hasValue && showTextValue && !showLabel;
    const showPlaceholder = !hasValue && showTextValue && !showLabel;

    return (
        <div className={`flex items-start relative flex-1 min-w-0 ${showPlaceholder ? "opacity-40" : ""} ${className}`}>
            {showValue && (
                <p className="font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-[var(--color-text-text-main,#2d3748)] truncate w-full">
                    {label}
                </p>
            )}
            {showPlaceholder && (
                <p className="font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-[var(--color-text-text-main,#2d3748)] truncate w-full">
                    {placeholder}
                </p>
            )}
        </div>
    );
};

// Main Component: PickSelect
export type PickSelectProps = {
    className?: string;
    isDisabled?: boolean;
    state?: "default" | "valid" | "invalid"; // "invaild" in Figma -> "invalid" fixed
    type?: "single" | "multi";
    // Data props
    value?: string;
    placeholder?: string;
    onClick?: () => void;
};

export const PickSelect = ({
    className = "",
    isDisabled = false,
    state = "default",
    type = "single",
    value,
    placeholder = "選択してください",
    onClick,
}: PickSelectProps) => {
    const hasValue = !!value;

    // Styles logic based on state
    // Border colors
    let borderColorClass = "";
    if (state === "invalid" && !isDisabled) {
        borderColorClass = "border-[var(--color-status-error,#e53e3e)]";
    } else if (state === "valid" && !isDisabled) {
        borderColorClass = "border-[var(--color-border-border-focus,#03a8f4)]";
    } else {
        borderColorClass = "border-[var(--color-border-border,#e2e8f0)]";
    }

    // Container specific styles
    // Figma shows specific padding, height, radius
    const containerBase = `
        bg-[var(--color-background-surface-surface,#ffffff)] 
        border border-solid 
        flex h-[40px] items-center 
        pl-[16px] pr-[32px] 
        relative 
        rounded-[var(--border-radius-base,4px)] 
        shrink-0 w-full
        cursor-pointer
    `;

    // Wrapper styles
    // Figma wraps it in a 590px div, but we'll make it 100% or allow override via className
    // "content-stretch flex flex-col items-start relative w-[590px]"
    // We will let the parent control width, but default to w-full or mimic the design if needed.
    // However, the component itself should probably just be the trigger.
    // The wrapper in Figma handles "justify-center" etc. based on state. 

    // Disabled state
    const disabledClass = isDisabled ? "opacity-40 cursor-not-allowed bg-[var(--color-background-surface-background,#f7fafc)]" : "hover:bg-gray-50";

    return (
        <div
            className={`flex flex-col items-start relative w-full ${className}`}
            onClick={!isDisabled ? onClick : undefined}
        >
            <div className={`${containerBase} ${borderColorClass} ${disabledClass}`}>
                <SelectText
                    hasValue={hasValue}
                    label={value}
                    placeholder={placeholder}
                />

                {/* Icon */}
                <div className="absolute right-[9px] size-[20px] top-[9px] text-[var(--color-text-text-main,#2d3748)]">
                    <div className="size-full">
                        <ChevronDownIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PickSelect;
