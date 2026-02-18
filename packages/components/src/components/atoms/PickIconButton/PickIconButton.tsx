import React from 'react';

export type PickIconButtonProps = {
    className?: string;
    isDisabled?: boolean;
    size?: "xs" | "sm" | "md";
    variant?: "primary" | "secondary" | "tertiary" | "danger";
    icon?: React.ReactNode;
    onClick?: () => void;
};

// Default Icon (ChevronDown) if none provided, for testing/fallback
const DefaultIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
    </svg>
);

export const PickIconButton = ({
    className = "",
    isDisabled = false,
    size = "sm",
    variant = "primary",
    icon,
    onClick,
}: PickIconButtonProps) => {

    // Size styles
    const sizeClasses = {
        xs: "size-[24px] p-[4px]", // Icon container should be 16px
        sm: "size-[32px] p-[4px]", // Icon container should be 24px
        md: "size-[40px] p-[8px]", // Icon container should be 24px
    };

    const iconSizeClasses = {
        xs: "size-[16px]",
        sm: "size-[24px]",
        md: "size-[24px]",
    };

    // Variant styles
    const variantClasses = {
        primary: `
            bg-[var(--color-action-primary,#03a8f4)] text-white 
            ${!isDisabled ? "hover:bg-[var(--color-action-primary-hover,#0487d1)] active:bg-[var(--color-action-primary-pressed,#03569b)]" : ""}
        `,
        secondary: `
            bg-[var(--color-background-surface-surface,#ffffff)] 
            border border-[var(--color-border-border,#e2e8f0)] 
            text-[var(--color-text-text-main,#2d3748)]
            ${!isDisabled ? "hover:bg-[var(--color-action-secondary-hover,#edf2f7)] active:bg-[var(--color-action-secondary-pressed,#e2e8f0)]" : ""}
        `,
        tertiary: `
            bg-transparent 
            text-[var(--color-text-text-main,#2d3748)]
            ${!isDisabled ? "hover:bg-[var(--color-background-surface-hover,#edf2f7)] active:bg-[var(--color-background-surface-pressed,#e2e8f0)]" : ""}
        `,
        danger: `
            bg-[var(--color-action-danger,#e53e3e)] text-white
            ${!isDisabled ? "hover:bg-[var(--color-action-danger-hover,#9b2c2c)] active:bg-[var(--color-action-danger-pressed,#63171b)]" : ""}
        `,
    };

    const baseClasses = "flex items-center justify-center rounded-[var(--border-radius-base,4px)] transition-colors duration-200 cursor-pointer";
    const disabledClasses = isDisabled ? "opacity-40 cursor-not-allowed" : "";

    return (
        <button
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${disabledClasses}
                ${className}
            `}
            onClick={!isDisabled ? onClick : undefined}
            disabled={isDisabled}
        >
            <div className={`flex items-center justify-center ${iconSizeClasses[size]}`}>
                {icon || <DefaultIcon />}
            </div>
        </button>
    );
};

export default PickIconButton;
