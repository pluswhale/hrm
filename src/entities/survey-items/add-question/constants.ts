import { Option_SURVEY_QUESTION } from '../../../redux/slices/create-survey';

export const DEFAULT_OPTIONS = {
    short_text: [{ position: 1, type: 'short_text', mode: 'read' }],
    long_text: [{ position: 1, type: 'long_text', mode: 'read' }],
    one_variant: [
        { position: 1, type: 'one_variant', mode: 'read', optionName: 'Вариант 1' },
        { position: 2, type: 'one_variant', mode: 'read', optionName: 'Вариант 2' },
        { position: 3, type: 'one_variant', mode: 'read', optionName: 'Вариант 3' },
    ],
    multiple_variants: [
        { position: 1, type: 'multiple_variants', mode: 'read', optionName: 'Вариант 1' },
        { position: 2, type: 'multiple_variants', mode: 'read', optionName: 'Вариант 2' },
        { position: 3, type: 'multiple_variants', mode: 'read', optionName: 'Вариант 3' },
    ],
} as { [key: string]: Option_SURVEY_QUESTION[] };

