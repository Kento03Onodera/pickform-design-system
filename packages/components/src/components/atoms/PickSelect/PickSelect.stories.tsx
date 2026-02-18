import type { Meta, StoryObj } from '@storybook/react';
import { PickSelect } from './PickSelect';
import { useState } from 'react';

const meta = {
    title: 'Atoms/PickSelect',
    component: PickSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'radio', options: ['single', 'multi'] },
        state: { control: 'select', options: ['default', 'valid', 'invalid'] },
        isDisabled: { control: 'boolean' },
        value: { control: 'text' },
        placeholder: { control: 'text' },
    },
} satisfies Meta<typeof PickSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Wrapper
const PickSelectWithState = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || "");
    const handleClick = () => {
        if (value) setValue("");
        else setValue("Selected Value");
    };
    return <PickSelect {...args} value={value} onClick={handleClick} />;
};

export const Default: Story = {
    args: {
        type: 'single',
        state: 'default',
        placeholder: '選択してください',
    },
    render: (args) => <PickSelectWithState {...args} />,
};

export const WithValue: Story = {
    args: {
        type: 'single',
        state: 'default',
        value: 'Selected Option',
    },
};

export const Valid: Story = {
    args: {
        type: 'single',
        state: 'valid',
        value: 'Valid Selection',
    },
};

export const Invalid: Story = {
    args: {
        type: 'single',
        state: 'invalid',
        placeholder: 'Error state',
    },
};

export const Disabled: Story = {
    args: {
        type: 'single',
        isDisabled: true,
        placeholder: 'Disabled',
    },
};

export const Multi: Story = {
    args: {
        type: 'multi',
        state: 'default',
        placeholder: 'Multi Select',
    },
};

export const MultiGrid: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-[400px]">
            <PickSelect state="default" placeholder="Default" />
            <PickSelect state="valid" value="Valid Value" />
            <PickSelect state="invalid" placeholder="Invalid" />
            <PickSelect isDisabled placeholder="Disabled" />
        </div>
    )
}
