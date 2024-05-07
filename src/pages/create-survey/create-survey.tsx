import React from 'react';
import { HorizontalNavigation } from '../../shared/components/horizontal-navigation';

const CreateSurvey = () => {
    const navigation = [
        {
            title: 'Опрос',
            url: '/survey',
        },
        {
            title: 'Создание опроса',
            url: '',
        }
    ];
    return (
        <div>
            <HorizontalNavigation navigation={navigation}/>

        </div>
    );
};

export default CreateSurvey;