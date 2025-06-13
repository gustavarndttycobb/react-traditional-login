import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextFieldCustom } from '../shared/components/Textfield/Textfield';
import { Email, Visibility } from '@mui/icons-material';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/TextfieldCustom',
    component: TextFieldCustom,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],

} satisfies Meta<typeof TextFieldCustom>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaulTextfield: Story = {};

export const TextfieldWithStartIcon: Story = {
    args: {
        startIcon: <Email /> as React.ReactNode,
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
    },
};

export const TextfieldWithEndIcon: Story = {
    args: {
        startIcon: "" as React.ReactNode,
        endIcon: <Visibility /> as React.ReactNode,
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'password',
    },
};


