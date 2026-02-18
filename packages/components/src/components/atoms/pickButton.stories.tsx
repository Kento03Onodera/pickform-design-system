import type { Meta, StoryObj } from '@storybook/react';
import { PickButton } from './pickButton';

const meta = {
    title: 'Atoms/PickButton',
    component: PickButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'danger']
        },
        state: {
            control: 'select',
            options: ['default', 'hover', 'pressed']
        },
        size: {
            control: 'select',
            options: ['sm', 'md']
        },
        isDisabled: { control: 'boolean' },
        isLoading: { control: 'boolean' },
        showLeftIcon: { control: 'boolean' },
        showRightIcon: { control: 'boolean' },
        textValue: { control: 'text' },
    },
} satisfies Meta<typeof PickButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        textValue: 'Button',
        state: 'default',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        textValue: 'Button',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        textValue: 'Button',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        textValue: 'Button',
    },
};

export const WithIcons: Story = {
    args: {
        variant: 'primary',
        textValue: 'Button',
        showLeftIcon: true,
        showRightIcon: true,
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        textValue: 'Button',
        isDisabled: true,
    },
};

export const Loading: Story = {
    args: {
        variant: 'primary',
        textValue: 'Button',
        isLoading: true,
    },
};

export const AllStates: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
                <span>Default:</span>
                <PickButton {...args} state="default" />
            </div>
            <div className="flex gap-4 items-center">
                <span>Hover:</span>
                <PickButton {...args} state="hover" />
            </div>
            <div className="flex gap-4 items-center">
                <span>Pressed:</span>
                <PickButton {...args} state="pressed" />
            </div>
            <div className="flex gap-4 items-center">
                <span>Disabled:</span>
                <PickButton {...args} isDisabled />
            </div>
            <div className="flex gap-4 items-center">
                <span>Loading:</span>
                <PickButton {...args} isLoading />
            </div>
        </div>
    ),
    args: {
        variant: 'primary',
        textValue: 'Button',
    },
};
