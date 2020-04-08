import React from 'react';
import { expect } from 'chai';
import MyComponent from './my-component';

describe('my-component', function MyComponentSpec () {
    it('it exists', () => {
        expect(MyComponent).to.be.ok;
    });
});
