import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MessageForm from '../components/MessageForm/MessageForm';

describe('<MessageForm />', () => {
  let getByTestId;

  describe('clicking submit button', () => {
    beforeEach(async () => {
      ({ getByTestId } = render(<MessageForm />));
      await userEvent.type(getByTestId('newMessageText'), 'Unit Test');
      await userEvent.click(getByTestId('messageTextButton'));
    });
    it('displays the uppercase text on screen', () => {
      expect(getByTestId('newMessageText').value).toEqual('UNIT TEST');
    });
  });
});
