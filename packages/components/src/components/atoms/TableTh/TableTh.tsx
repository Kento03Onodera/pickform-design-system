import React from 'react';

// Help Icon (Question Mark)
const HelpIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V11C11 10.45 11.45 10 12 10C12.55 10 13 9.55 13 9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9H9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9C15 10.11 14.11 11 13 11.8V13Z" fill="currentColor" />
    </svg>
);

// Sort Icons
const SortDefaultIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.83L15.17 9H8.83L12 5.83ZM12 18.17L8.83 15H15.17L12 18.17Z" fill="currentColor" />
    </svg>
);

const SortAscIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.83L15.17 9H8.83L12 5.83Z" fill="currentColor" />
        <path d="M12 18.17L8.83 15H15.17L12 18.17Z" fill="currentColor" opacity="0.3" />
    </svg>
);

const SortDescIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.83L15.17 9H8.83L12 5.83Z" fill="currentColor" opacity="0.3" />
        <path d="M12 18.17L8.83 15H15.17L12 18.17Z" fill="currentColor" />
    </svg>
);

// Internal CheckBox component (simplistic version as defined in Figma for this component)
// In a real app, this should be a separate atom imported here.
type CheckBoxProps = {
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};

const CheckBox = ({ className, checked = false, onChange }: CheckBoxProps) => (
    <div
        className={`relative shrink-0 size-[20px] cursor-pointer ${className || ""}`}
        onClick={() => onChange?.(!checked)}
    >
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="currentColor" strokeWidth="1" fill={checked ? "currentColor" : "transparent"} className="text-[var(--color-border-border,#e2e8f0)]" />
            {checked && <path d="M6 10L9 13L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
        </svg>
    </div>
);


type TableThProps = {
    className?: string;
    textValue?: string;
    type?: "default" | "sort-default" | "sort-asc" | "sort-desc" | "checkbox" | "none";
    isChecked?: boolean;
    onCheckChange?: (checked: boolean) => void;
    onClick?: () => void;
    rightIconValue?: React.ReactNode | null;
    showRightIcon?: boolean;
};

export const TableTh = ({
    className,
    textValue = "テーブル見出し",
    type = "default",
    isChecked = false,
    onCheckChange,
    onClick,
    rightIconValue = null,
    showRightIcon = false,
}: TableThProps) => {
    const isCheckbox = type === "checkbox";
    const isNone = type === "none";
    const isSortable = ["sort-default", "sort-asc", "sort-desc"].includes(type);
    const hasText = ["default", "sort-default", "sort-asc", "sort-desc"].includes(type);

    // Styling logic
    const baseClasses = "flex relative bg-[var(--color-component-table-header,#e2e8f0)]";

    // Height and padding
    // Height 48px from design
    // Wait, spacing-40 is 40. 48 is spacing-? 
    // Let's verify standard spacing. distinct logical spacing.
    // In variables.css: --spacing-40: 40. 
    // Figma says h-[var(--size/48,48px)]. We don't have size-48 in variables.css likely.
    // We'll use hardcoded 48px or calc(12 * 4px)? 
    // Or just h-[48px].
    const layoutWrapperClasses = isNone
        ? "items-start p-0 w-[200px]"
        : isCheckbox
            ? "items-center justify-center px-[calc(var(--semantic-spacing-12,12)*1px)] py-[calc(var(--semantic-spacing-8,8)*1px)]"
            : isSortable
                ? "items-center justify-between px-[calc(var(--semantic-spacing-12,12)*1px)] py-[calc(var(--semantic-spacing-8,8)*1px)] w-[200px] cursor-pointer hover:bg-[var(--color-background-surface-surface-hover,#edf2f7)]"
                : "items-center px-[calc(var(--semantic-spacing-12,12)*1px)] py-[calc(var(--semantic-spacing-8,8)*1px)] w-[200px]";

    return (
        <div
            className={`${baseClasses} h-[48px] ${layoutWrapperClasses} ${className || ""}`}
            onClick={isSortable ? onClick : undefined}
        >
            {hasText && (
                <div className="flex flex-1 gap-[calc(var(--semantic-spacing-8,8)*1px)] items-center min-w-0 overflow-hidden">
                    <p className="flex-1 font-sans font-bold leading-[1.5] text-[14px] text-[color:var(--color-text-text-sub,#718096)] truncate">
                        {textValue}
                    </p>
                    {showRightIcon && (
                        <div className="relative shrink-0 size-[24px] text-[color:var(--color-text-text-sub,#718096)]">
                            {rightIconValue || <HelpIcon />}
                        </div>
                    )}
                </div>
            )}

            {isSortable && (
                <div className="relative shrink-0 size-[24px] text-[color:var(--color-text-text-sub,#718096)]">
                    {type === "sort-default" && <SortDefaultIcon />}
                    {type === "sort-asc" && <SortAscIcon />}
                    {type === "sort-desc" && <SortDescIcon />}
                </div>
            )}

            {isCheckbox && (
                <CheckBox checked={isChecked} onChange={onCheckChange} />
            )}

            {isNone && <div className="flex-1 h-full" />}
        </div>
    );
};

export default TableTh;
