import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { LanguageSelectorButton } from '../shared/components/LanguageSelectorButton/LanguageSelectorButton';

const meta: Meta<typeof LanguageSelectorButton> = {
    title: 'Example/LanguageSelectorButton',
    component: LanguageSelectorButton,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <Story />
            </Box>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof LanguageSelectorButton>;

export const Default: Story = {
    args: {
        currentLanguage: 'en',
        onChangeLanguage: () => { },
        languages: [
            { code: 'en', label: 'English', },
            { code: 'es', label: 'Español', },
            { code: 'fr', label: 'Français', },
        ],
    },
};
