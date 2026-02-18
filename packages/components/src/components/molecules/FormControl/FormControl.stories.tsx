import type { Meta, StoryObj } from '@storybook/react';
import { FormControl } from './FormControl';
import { PickSelect } from '../../atoms/PickSelect';

// Mock Input for testing
const MockInput = () => (
    <input
        className="w-full h-[40px] px-3 border border-[var(--color-border-border,#e2e8f0)] rounded bg-white text-[14px]"
        placeholder="Input placeholder"
    />
);

const meta = {
    title: 'Molecules/FormControl',
    component: FormControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        helperText: { control: 'text' },
        errorMessage: { control: 'text' },
        isRequired: { control: 'boolean' },
        isDisabled: { control: 'boolean' },
    },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Label',
        children: <MockInput />,
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Label',
        helperText: 'This is a helper text.',
        children: <MockInput />,
    },
};

export const WithError: Story = {
    args: {
        label: 'Label',
        errorMessage: 'This is an error message.',
        children: <MockInput />,
    },
};

export const Required: Story = {
    args: {
        label: 'Label',
        isRequired: true,
        children: <MockInput />,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Label',
        isDisabled: true,
        children: <MockInput />,
    },
};

export const WithPickSelect: Story = {
    args: {
        label: 'Select Label',
        children: <PickSelect state="default" placeholder="Select option" />,
    }
}
