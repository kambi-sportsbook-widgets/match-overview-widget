/* eslint-env jest */
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';
import ItemContainer from '../../src/js/Components/ItemContainer';

let renderer;

describe('ItemContainer view', () => {

   beforeEach(() => {
      renderer = new ReactShallowRenderer();
   });

   it('renders correctly with default props', () => {
      expect(renderer.render(
         <ItemContainer />
      )).toMatchSnapshot();
   });

   it('renders correctly selected state', () => {
      expect(renderer.render(
         <ItemContainer selected={true} />
      )).toMatchSnapshot();
   });

   it('renders correctly with one child element', () => {
      expect(renderer.render(
         <ItemContainer>One</ItemContainer>
      )).toMatchSnapshot();
   });

   it('renders correctly with many child elements', () => {
      expect(renderer.render(
         <ItemContainer>
            One
            Two
            <ul>
               <li>Three</li>
            </ul>
         </ItemContainer>
      )).toMatchSnapshot();
   });

});

describe('ItemContainer interface', () => {

   beforeEach(() => {
      renderer = new ReactShallowRenderer();
   });

   it('doesn\'t react to click events', () => {
      const onClickMock = jest.fn();

      const wrapper = shallow(
         <ItemContainer onClick={onClickMock} />
      );

      expect(onClickMock).not.toHaveBeenCalled();

      wrapper.first().simulate('click');

      expect(onClickMock).toHaveBeenCalledTimes(0);
   });

   it('calls onWidth after mounting', () => {
      const onWidthMock = jest.fn();

      mount(<ItemContainer onWidth={onWidthMock} />);

      expect(onWidthMock).toHaveBeenCalledTimes(1);
   });

});
