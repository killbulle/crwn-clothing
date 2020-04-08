import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import MyComponent from './my-component';

const stories = storiesOf('my-component', module)
    .addDecorator(centered);

stories.add(
    'Default',
    () => (<MyComponent/>),
);
