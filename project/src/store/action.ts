import {createAction} from '@reduxjs/toolkit';

export const onChangeCity = createAction<{city: string}>('city/change');


