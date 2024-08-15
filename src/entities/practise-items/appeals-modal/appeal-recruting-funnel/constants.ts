export const colorPalette = (index: number) => {
    switch (index) {
        case 0:
            return '#DCDBFC';
        case 1:
            return '#B4B3FC';
        case 2:
            return '#9494F1';
        case 3:
            return '#7776E7';
        default:
            return '#7776E7';
    }
};

export const RECRUITING_FUNNEL_DATA = [
    { stage: 'Новые', value: 1, absolute: '100%', relative: '100%' },
    { stage: 'Созвон', value: 2, absolute: '100%', relative: '100%' },
    { stage: 'Собеседование', value: 3, absolute: '100%', relative: '100%' },
    { stage: 'Оффер', value: 4, absolute: '100%', relative: '100%' },
];

