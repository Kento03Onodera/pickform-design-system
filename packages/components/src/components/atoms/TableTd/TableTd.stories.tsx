import type { Meta, StoryObj } from '@storybook/react';
import { TableTd } from './TableTd';
import { useState } from 'react';

const meta = {
    title: 'Atoms/TableTd',
    component: TableTd,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['avatar', 'checkbox', 'iconButton', 'iconButtons', 'menu', 'radio', 'status', 'text', 'textDouble', 'textWithLeftIcon', 'userInfo', 'select', 'input', 'textarea', 'textDoublewithicon']
        },
        textValue: { control: 'text' },
        subTextValue: { control: 'text' },
        showPickIconButton1: { control: 'boolean' },
        showRightIcon: { control: 'boolean' },
        status1: { control: 'boolean' },
        status2: { control: 'boolean' },
        status3: { control: 'boolean' },
        status4: { control: 'boolean' },
        isChecked: { control: 'boolean' },
    },
} satisfies Meta<typeof TableTd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: 'text',
        textValue: 'Text Content',
    },
};

export const TextDouble: Story = {
    args: {
        type: 'textDouble',
        textValue: 'Main Text',
        subTextValue: 'Sub Text',
    },
};

export const TextWithLeftIcon: Story = {
    args: {
        type: 'textWithLeftIcon',
        textValue: 'Folder Name',
    },
};

export const TextWithStatus: Story = {
    args: {
        type: 'text',
        textValue: 'With Status',
        status1: true,
        status2: true,
    },
};

export const Checkbox: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [checked, setChecked] = useState(false);
        return <TableTd type="checkbox" isChecked={checked} onCheckChange={setChecked} />;
    },
};

export const Radio: Story = {
    args: {
        type: 'radio',
        isChecked: true,
    }
};

export const IconButton: Story = {
    args: {
        type: 'iconButton',
    },
};

export const IconButtons: Story = {
    args: {
        type: 'iconButtons',
    },
};

export const Status: Story = {
    args: {
        type: 'status',
    },
};

export const Menu: Story = {
    args: {
        type: 'menu',
    },
};

export const Select: Story = {
    args: {
        type: 'select',
    },
};

export const Input: Story = {
    args: {
        type: 'input',
        textValue: 'Input value'
    },
};

export const Textarea: Story = {
    args: {
        type: 'textarea',
    },
};

export const UserInfo: Story = {
    args: {
        type: 'userInfo',
    },
};

export const Avatar: Story = {
    args: {
        type: 'avatar',
    },
};

export const AllTypes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-2 bg-gray-100 p-4">
            <TableTd {...args} type="text" textValue="Text" />
            <TableTd {...args} type="textDouble" textValue="Text" subTextValue="Sub" />
            <TableTd {...args} type="checkbox" />
            <TableTd {...args} type="status" />
            <TableTd {...args} type="avatar" />
            <TableTd {...args} type="userInfo" />
        </div>
    ),
};
