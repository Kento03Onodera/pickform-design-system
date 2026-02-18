import type { Meta, StoryObj } from '@storybook/react';
import { PickIconButton } from './PickIconButton';
import { fn } from '@storybook/test';

// Example Icons
const SearchIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
    </svg>
);

const meta = {
    title: 'Atoms/PickIconButton',
    component: PickIconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md'],
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'danger'],
        },
        isDisabled: { control: 'boolean' },
    },
    args: {
        onClick: fn(),
    }
} satisfies Meta<typeof PickIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        size: 'md',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        size: 'md',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        isDisabled: true,
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-end gap-4">
            <PickIconButton size="xs" variant="primary" />
            <PickIconButton size="sm" variant="primary" />
            <PickIconButton size="md" variant="primary" />
        </div>
    )
};

export const WithCustomIcon: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        icon: <SearchIcon />,
    }
}
