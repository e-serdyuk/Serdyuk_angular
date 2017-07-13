﻿// Действия — это структура, которая передает данные из вашего приложения в хранилище. 
// По соглашению, действия должны иметь строковое поле type, которое указывает на тип исполняемого действия. 

// Генераторы действий — функции, которые создают действия. В // Redux генераторы действий являются чистыми функциями, 
// что делает их портативными и простыми для тестирования, т.к. они не имеют сайд-эффектов.

export const showText = (text) => {
    return {
        type: 'SHOWTEXT', 
        payload: text
    }
} 

