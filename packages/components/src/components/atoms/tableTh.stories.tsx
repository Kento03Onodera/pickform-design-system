import type { Meta, StoryObj } from '@storybook/react';
import { TableTh } from './tableTh';
import { useState } from 'react';

const meta = {
    title: 'Atoms/TableTh',
    component: TableTh,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['default', 'sort-default', 'sort-asc', 'sort-desc', 'checkbox', 'none']
        },
        textValue: { control: 'text' },
        showRightIcon: { control: 'boolean' },
        isChecked: { control: 'boolean' },
    },
} satisfies Meta<typeof TableTh>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'default',
        textValue: 'Header',
    },
};

export const SortDefault: Story = {
    args: {
        type: 'sort-default',
        textValue: 'Sortable',
    },
};

export const SortAsc: Story = {
    args: {
        type: 'sort-asc',
        textValue: 'Sorted Asc',
    },
};

export const SortDesc: Story = {
    args: {
        type: 'sort-desc',
        textValue: 'Sorted Desc',
    },
};

export const WithHelpIcon: Story = {
    args: {
        type: 'default',
        textValue: 'With Help',
        showRightIcon: true,
    },
};

export const CheckboxType: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [checked, setChecked] = useState(false);
        return <TableTh type="checkbox" isChecked={checked} onCheckChange={setChecked} />;
    },
};

export const None: Story = {
    args: {
        type: 'none',
    },
};

export const AllTypes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <TableTh {...args} type="default" textValue="Default" />
            <TableTh {...args} type="sort-default" textValue="Sort Default" />
            <TableTh {...args} type="sort-asc" textValue="Sort Asc" />
            <TableTh {...args} type="sort-desc" textValue="Sort Desc" />
            <TableTh {...args} type="default" textValue="With Icon" showRightIcon />
            <TableTh {...args} type="checkbox" />
            <TableTh {...args} type="none" />
        </div>
    ),
};
