export type SwitchTabProps = {
    tabs: Tab[];
    onTabClick: (index: number) => void;
    activeTab: number;
    design?: 'default' | 'alternative'; // Добавляем параметр design
    onFirstButtonClick?: () => void; // Добавляем колбэк для первой кнопки
}

type Tab =  {
    label: string;
}
