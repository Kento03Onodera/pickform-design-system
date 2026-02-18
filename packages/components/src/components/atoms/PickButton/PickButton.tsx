import React from 'react';

type PickButtonProps = {
    className?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    leftIconValue?: React.ReactNode | null;
    rightIconValue?: React.ReactNode | null;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    size?: "sm" | "md";
    state?: "default" | "hover" | "pressed";
    textValue?: string;
    variant?: "primary" | "secondary" | "tertiary" | "danger";
    onClick?: () => void;
};

export const PickButton = ({
    className,
    isDisabled = false,
    isLoading = false,
    leftIconValue = null,
    rightIconValue = null,
    showLeftIcon = false,
    showRightIcon = false,
    size = "sm",
    state = "default",
    textValue = "label",
    variant = "primary",
    onClick,
}: PickButtonProps) => {
    // Base classes
    const baseClasses = "content-stretch flex items-center justify-center relative rounded-[calc(var(--semantic-border-radius-base,4)*1px)] font-sans font-bold leading-[1.5]";
    const cursorClass = isDisabled || isLoading ? "cursor-not-allowed" : "cursor-pointer";

    // Size classes
    // Note: Spacing tokens are unitless in variables.css, so we multiply by 1px
    // Font sizes are not in variables.css, so we use hardcoded values from design
    const sizeClasses = size === "sm"
        ? "h-[calc(var(--semantic-spacing-32,32)*1px)] min-w-[64px] p-[calc(var(--semantic-spacing-8,8)*1px)] gap-[calc(var(--semantic-spacing-8,8)*1px)] text-[12px]"
        : "h-[calc(var(--semantic-spacing-40,40)*1px)] min-w-[80px] px-[calc(var(--semantic-spacing-16,16)*1px)] py-[calc(var(--semantic-spacing-8,8)*1px)] gap-[calc(var(--semantic-spacing-8,8)*1px)] text-[14px]";

    // Variant & State classes
    let variantClasses = "";
    let textClass = "";

    // Helper to determine background and text color based on variant and state
    if (variant === "primary") {
        textClass = "text-[color:var(--color-text-text-white,white)]";
        if (isDisabled || isLoading) {
            variantClasses = "bg-[var(--color-action-primary,#03a8f4)] opacity-40";
        } else {
            switch (state) {
                case "hover": variantClasses = "bg-[var(--color-action-primary-hover,#0487d1)]"; break;
                case "pressed": variantClasses = "bg-[var(--color-action-primary-pressed,#03569b)]"; break;
                default: variantClasses = "bg-[var(--color-action-primary,#03a8f4)]";
            }
        }
    } else if (variant === "secondary") {
        textClass = "text-[color:var(--color-text-text-main,#2d3748)]";
        const borderClass = "border border-[var(--color-border-border,#e2e8f0)] border-solid";
        if (isDisabled || isLoading) {
            variantClasses = `bg-[var(--color-action-secondary,white)] ${borderClass} opacity-40`;
        } else {
            switch (state) {
                case "hover": variantClasses = `bg-[var(--color-action-secondary-hover,#edf2f7)] ${borderClass}`; break;
                case "pressed": variantClasses = `bg-[var(--color-action-secondary-pressed,#e2e8f0)] ${borderClass}`; break;
                default: variantClasses = `bg-[var(--color-action-secondary,white)] ${borderClass}`;
            }
        }
    } else if (variant === "tertiary") {
        textClass = "text-[color:var(--color-text-text-main,#2d3748)]";
        if (isDisabled || isLoading) {
            variantClasses = "opacity-40";
        } else {
            switch (state) {
                case "hover": variantClasses = "bg-[var(--color-background-surface-surface-hover,#edf2f7)]"; break;
                case "pressed": variantClasses = "bg-[var(--color-background-surface-surface-pressed,#e2e8f0)]"; break;
                default: variantClasses = ""; // transparent
            }
        }
    } else if (variant === "danger") {
        textClass = "text-[color:var(--color-text-text-white,white)]";
        if (isDisabled || isLoading) {
            variantClasses = "bg-[var(--color-action-danger,#e53e3e)] opacity-40";
        } else {
            switch (state) {
                case "hover": variantClasses = "bg-[var(--color-action-danger-hover,#9b2c2c)]"; break;
                case "pressed": variantClasses = "bg-[var(--color-action-danger-pressed,#63171b)]"; break;
                default: variantClasses = "bg-[var(--color-action-danger,#e53e3e)]";
            }
        }
    }

    // Icons
    const DefaultLeftIcon = () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
        </svg>
    );

    const DefaultRightIcon = () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
        </svg>
    );

    const LoadingSpinner = () => (
        <svg className="animate-spin" width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
            <path d="M15 8C15 4.13401 11.866 1 8 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );

    return (
        <div
            className={`${baseClasses} ${sizeClasses} ${variantClasses} ${cursorClass} ${className || ""}`}
            onClick={!isDisabled && !isLoading ? onClick : undefined}
        >
            {/* Left Icon or Spinner */}
            {(showLeftIcon || isLoading) && (
                <div className={`relative shrink-0 ${size === 'sm' ? 'size-[20px]' : 'size-[20px]'} ${textClass}`}>
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        leftIconValue || <DefaultLeftIcon />
                    )}
                </div>
            )}

            {/* Text */}
            <p className={`relative shrink-0 ${textClass}`}>
                {textValue}
            </p>

            {/* Right Icon */}
            {showRightIcon && !isLoading && (
                <div className={`relative shrink-0 ${size === 'sm' ? 'size-[24px]' : 'size-[24px]'} ${textClass}`}>
                    {rightIconValue || <DefaultRightIcon />}
                </div>
            )}
        </div>
    );
};

export default PickButton;
