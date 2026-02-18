import React from 'react';

// Sub-component: RequiredBadge
const RequiredBadge = () => (
    <span className="text-[var(--color-status-error,#e53e3e)] text-xs ml-1">*</span>
);

export type FormControlProps = {
    children: React.ReactNode;
    className?: string;
    label?: string;
    helperText?: string;
    errorMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
};

export const FormControl = ({
    children,
    className = "",
    label,
    helperText,
    errorMessage,
    isRequired = false,
    isDisabled = false,
}: FormControlProps) => {
    const hasError = !!errorMessage;

    return (
        <div className={`flex flex-col gap-2 w-full ${className}`}>
            {/* Label Area */}
            {label && (
                <div className="flex items-center">
                    <label className={`text-sm font-bold text-[var(--color-text-text-main,#2d3748)] ${isDisabled ? "opacity-40" : ""}`}>
                        {label}
                    </label>
                    {isRequired && <RequiredBadge />}
                </div>
            )}

            {/* Input Area */}
            <div className={isDisabled ? "opacity-40 pointer-events-none" : ""}>
                {children}
            </div>

            {/* Helper / Error Message Area */}
            {(hasError || helperText) && (
                <div className="text-xs min-h-[18px]">
                    {hasError ? (
                        <p className="text-[var(--color-status-error,#e53e3e)] leading-[1.5]">
                            {errorMessage}
                        </p>
                    ) : (
                        <p className="text-[var(--color-text-text-sub,#718096)] leading-[1.5]">
                            {helperText}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default FormControl;
