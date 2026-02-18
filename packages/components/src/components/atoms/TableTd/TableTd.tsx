import React, { useState } from 'react';

// --- Sub-components (Internal) ---

// Icons
const MoreHorizIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
    </svg>
);
const ShareIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.66 16.42 22 18.08 22C19.74 22 21.08 20.66 21.08 19C21.08 17.34 19.74 16.08 18.08 16.08H18V16.08Z" />
    </svg>
);
const CopyIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" />
    </svg>
);
const StarIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
);
const StarFillIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
);
const ChevronDownIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
    </svg>
);
const ChevronRightIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
    </svg>
);
const FolderIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" />
    </svg>
);
const LockIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" />
    </svg>
);
const SignatureIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 11.8V17H19V11.8C19 11.23 19.8 11.21 20 11.66V15C20 18.5 18 20 15 20C12 20 11 18 11 16V12C11 10.5 12 10.5 12 12V14.63C12 15.68 12.3 16 13 16C13.7 16 14 15.35 14 14.5V9.67C14 7 12 7 10.5 7C9 7 7 9 7 11V16.89C6.88 17.7 6.36 18 5.5 18C4 18 3 16.5 3 14V6H2V4H5.32C6.91 4 8.71 4.41 10 5.86C11.3 4.41 12.8 4 14.68 4H18V6H13.5C21 6 22 8 22 12V16.18C21.73 17.5 21.41 18.94 19.5 20.91C17.59 22.88 14 22 14 22C4 22 1 18 1 14V10.5C1 7.23 2.9 6 4.9 6C5.9 6 6.7 6.4 7.27 7.1C7.84 6.4 8.84 6 10.5 6C13.5 6 16 8.5 16 11.8Z" />
    </svg>
);
const OverviewIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
    </svg>
);

// CheckBox
const CheckBox = ({ checked = false, onChange, className = "" }: { checked?: boolean; onChange?: (c: boolean) => void; className?: string }) => (
    <div className={`relative shrink-0 size-[20px] cursor-pointer ${className}`} onClick={() => onChange?.(!checked)}>
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="currentColor" strokeWidth="1" fill={checked ? "currentColor" : "transparent"} className={checked ? "text-[var(--color-action-primary,#03a8f4)]" : "text-[var(--color-border-border,#e2e8f0)]"} />
            {checked && <path d="M6 10L9 13L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
        </svg>
    </div>
);

// Radio
const RadioControl = ({ checked = false }: { checked?: boolean }) => (
    <div className={`relative size-[16px] rounded-full border-2 border-[var(--color-border-border,#e2e8f0)] ${checked ? 'border-[var(--color-action-primary,#03a8f4)] bg-[var(--color-action-primary,#03a8f4)]' : 'bg-white'}`}>
        {checked && <div className="absolute inset-[3px] rounded-full bg-white" />}
    </div>
);

// PickLabel
type PickLabelProps = {
    colorScheme?: "blue" | "gray";
    size?: "sm" | "md";
    textValue?: string;
    showIcon?: boolean;
};
const PickLabel = ({ colorScheme = "blue", size = "sm", textValue, showIcon }: PickLabelProps) => {
    let bg = "";
    let border = "";
    let text = "";
    let px = "";
    let py = "";

    if (colorScheme === "blue") {
        bg = "bg-[var(--color-accent-surface-accent-blue-surface,#e1f5fe)]";
        border = "border-[var(--color-accent-border-accent-blue-border,#4ec2f7)]";
        text = "text-[color:var(--color-accent-text-accent-blue-text,#049ae5)]";
    } else {
        bg = "bg-[var(--color-accent-surface-accent-gray-surface,#f7fafc)]";
        border = "border-[var(--color-accent-border-accent-gray-border,#a0aec0)]";
        text = "text-[color:var(--color-accent-text-accent-gray-text,#4a5568)]";
    }

    if (size === "md") {
        px = "px-[calc(var(--semantic-spacing-16,16)*1px)]";
        py = "py-[calc(var(--semantic-spacing-4,4)*1px)]";
    } else {
        px = "px-[calc(var(--semantic-spacing-8,8)*1px)]";
        py = "py-[2px]";
    }

    return (
        <div className={`flex items-center justify-center border border-solid rounded-full ${bg} ${border} ${px} ${py} gap-[calc(var(--semantic-spacing-4,4)*1px)]`}>
            {showIcon && <div className="size-[16px] shrink-0 text-current"><OverviewIcon /></div>}
            <span className={`font-bold leading-[1.5] ${text} ${size === "md" ? "text-[14px]" : "text-[12px]"}`}>{textValue}</span>
        </div>
    );
};

// Main TableTd Component
type TableTdProps = {
    className?: string;
    type?: "avatar" | "checkbox" | "iconButton" | "iconButtons" | "menu" | "radio" | "status" | "text" | "textDouble" | "textWithLeftIcon" | "userInfo" | "select" | "input" | "textarea" | "textDoublewithicon";
    textValue?: string;
    subTextValue?: string;
    avatar?: React.ReactNode;
    checkbox?: React.ReactNode;
    statusLabel?: React.ReactNode;
    showPickIconButton1?: boolean;
    showRightIcon?: boolean;
    status1?: boolean;
    status2?: boolean;
    status3?: boolean;
    status4?: boolean;
    // For specific variants
    isChecked?: boolean;
    onCheckChange?: (checked: boolean) => void;
};

export const TableTd = ({
    className = "",
    type = "text",
    textValue = "テーブル内容",
    subTextValue = "テーブル内容",
    avatar,
    checkbox,
    statusLabel,
    showPickIconButton1 = false,
    showRightIcon = false,
    status1 = false,
    status2 = false,
    status3 = false,
    status4 = false,
    isChecked = false,
    onCheckChange,
}: TableTdProps) => {
    // Base styles
    const baseClasses = "flex items-center px-[calc(var(--semantic-spacing-12,12)*1px)] py-[calc(var(--semantic-spacing-8,8)*1px)] bg-[var(--color-background-surface-surface,#ffffff)] border-t border-[var(--color-border-border,#e2e8f0)] h-[calc(var(--semantic-size-56,56)*1px)]";

    // Helper for status icons
    const renderStatusIcons = () => (
        <>
            {status1 && <div className="size-[16px] text-gray-500"><OverviewIcon /></div>}
            {status2 && <div className="size-[16px] text-gray-500"><SignatureIcon /></div>}
            {status3 && <div className="size-[16px] text-gray-500"><LockIcon /></div>}
            {status4 && <div className="size-[16px] text-yellow-500"><StarFillIcon /></div>}
        </>
    );

    // Expand button (caret down)
    const renderExpandButton = () => (
        showPickIconButton1 && (
            <div className="flex items-center justify-center size-[24px] bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
                <div className="size-[16px]"><ChevronDownIcon /></div>
            </div>
        )
    );

    // Render based on type
    switch (type) {
        case "checkbox":
            return (
                <div className={`${baseClasses} justify-center w-[44px] ${className}`}>
                    {checkbox || <CheckBox checked={isChecked} onChange={onCheckChange} />}
                </div>
            );
        case "radio":
            return (
                <div className={`${baseClasses} justify-center w-[44px] ${className}`}>
                    <RadioControl checked={isChecked} />
                </div>
            );
        case "iconButton":
            return (
                <div className={`${baseClasses} justify-center w-[56px] text-center ${className}`}>
                    <div className="flex items-center justify-center size-[32px] bg-white border border-[var(--color-border-border,#e2e8f0)] rounded-[4px] cursor-pointer hover:bg-gray-50">
                        <div className="size-[24px]"><MoreHorizIcon /></div>
                    </div>
                </div>
            );
        case "iconButtons":
            return (
                <div className={`${baseClasses} justify-end gap-2 bg-[var(--color-background-surface-surface-hover,#edf2f7)] ${className}`}>
                    <div className="flex items-center justify-center size-[32px] cursor-pointer hover:bg-gray-200 rounded-[4px]"><div className="size-[24px] text-gray-600"><ShareIcon /></div></div>
                    <div className="flex items-center justify-center size-[32px] cursor-pointer hover:bg-gray-200 rounded-[4px]"><div className="size-[24px] text-gray-600"><CopyIcon /></div></div>
                    <div className="flex items-center justify-center size-[32px] cursor-pointer hover:bg-gray-200 rounded-[4px]"><div className="size-[24px] text-gray-600"><StarIcon /></div></div>
                </div>
            );
        case "menu":
            return (
                <div className={`${baseClasses} items-start w-[290px] ${className}`}>
                    <div className="flex items-center justify-center h-[40px] px-4 min-w-[80px] bg-white border border-[var(--color-border-border,#e2e8f0)] rounded-[4px] cursor-pointer gap-2">
                        <span className="text-sm font-bold text-[var(--color-text-text-main,#2d3748)]">label</span>
                        <div className="size-[24px]"><ChevronDownIcon /></div>
                    </div>
                </div>
            );
        case "select":
            return (
                <div className={`${baseClasses} items-start w-[290px] ${className}`}>
                    <div className="flex items-center w-full h-[40px] px-4 bg-white border border-[var(--color-border-border,#e2e8f0)] rounded-[4px] relative">
                        <span className="text-sm text-gray-400">placeholder</span>
                        <div className="absolute right-2 size-[20px] top-2.5 text-gray-500"><ChevronDownIcon /></div>
                    </div>
                </div>
            );
        case "input":
            return (
                <div className={`${baseClasses} items-start w-[290px] ${className}`}>
                    <div className="flex items-center w-full h-[40px] px-4 bg-white border border-[var(--color-border-border,#e2e8f0)] rounded-[4px]">
                        <span className="text-sm text-[var(--color-text-text-main,#2d3748)]">{textValue === "テーブル内容" ? "value" : textValue}</span>
                    </div>
                </div>
            );
        case "textarea":
            return (
                <div className={`${baseClasses} items-start w-[290px] h-auto min-h-[56px] ${className}`}>
                    <div className="flex w-full min-h-[80px] p-3 bg-white border border-[var(--color-border-border,#e2e8f0)] rounded-[6px]">
                        <span className="text-sm text-[var(--color-text-text-main,#2d3748)]">value</span>
                    </div>
                </div>
            );
        case "status":
            return (
                <div className={`${baseClasses} w-[168px] ${className}`}>
                    {statusLabel || <PickLabel size="md" textValue="契約準備" colorScheme="blue" />}
                </div>
            );
        case "text":
            return (
                <div className={`${baseClasses} w-[290px] gap-2 ${className}`}>
                    <p className="flex-1 text-sm text-[var(--color-text-text-main,#2d3748)] truncate">{textValue}</p>
                    {renderExpandButton()}
                    {renderStatusIcons()}
                    {showRightIcon && <div className="size-[24px] text-gray-500"><ChevronRightIcon /></div>}
                </div>
            );
        case "textDouble":
            return (
                <div className={`${baseClasses} w-[290px] gap-2 ${className}`}>
                    <div className="flex flex-col flex-1 min-w-0 justify-center">
                        <p className="text-sm text-[var(--color-text-text-main,#2d3748)] truncate">{textValue}</p>
                        <p className="text-xs text-[var(--color-text-text-sub,#718096)] truncate">{subTextValue}</p>
                    </div>
                    {renderExpandButton()}
                    {renderStatusIcons()}
                    {showRightIcon && <div className="size-[24px] text-gray-500"><ChevronRightIcon /></div>}
                </div>
            );
        case "textWithLeftIcon":
            return (
                <div className={`${baseClasses} w-[290px] gap-2 ${className}`}>
                    <div className="flex flex-1 items-center gap-1 min-w-0">
                        <div className="size-[24px] shrink-0 text-gray-500"><FolderIcon /></div>
                        <p className="flex-1 text-sm text-[var(--color-text-text-main,#2d3748)] truncate">{textValue}</p>
                    </div>
                    {renderExpandButton()}
                    {renderStatusIcons()}
                    {showRightIcon && <div className="size-[24px] text-gray-500"><ChevronRightIcon /></div>}
                </div>
            );
        case "textDoublewithicon":
            return (
                <div className={`${baseClasses} w-[290px] gap-2 ${className}`}>
                    <div className="flex flex-1 items-center gap-1 min-w-0">
                        <div className="size-[24px] shrink-0 text-gray-500"><FolderIcon /></div>
                        <div className="flex flex-col flex-1 min-w-0 justify-center">
                            <p className="text-sm text-[var(--color-text-text-main,#2d3748)] truncate">{textValue}</p>
                            <p className="text-xs text-[var(--color-text-text-sub,#718096)] truncate">{subTextValue}</p>
                        </div>
                    </div>
                    {renderExpandButton()}
                    {renderStatusIcons()}
                </div>
            );
        case "userInfo":
            return (
                <div className={`${baseClasses} w-[290px] ${className}`}>
                    <div className="flex items-center gap-2 w-full">
                        <div className="size-[32px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-white shrink-0">
                            {avatar || "TA"}
                        </div>
                        <div className="flex flex-col text-xs text-[var(--color-text-text-main,#2d3748)] min-w-0 flex-1">
                            <p className="truncate">山田太郎</p>
                            <p className="truncate">株式会社PICK</p>
                            <p className="truncate">t.yamada@pick.tokyo</p>
                        </div>
                    </div>
                </div>
            );
        case "avatar":
        default:
            return (
                <div className={`${baseClasses} justify-center ${className}`}>
                    {avatar || (
                        <div className="size-[32px] rounded-full bg-[var(--color-blue-300,#4ec2f7)] flex items-center justify-center text-xs text-[var(--color-gray-800,#1a202c)] font-medium">
                            TA
                        </div>
                    )}
                </div>
            );
    }
};

export default TableTd;
