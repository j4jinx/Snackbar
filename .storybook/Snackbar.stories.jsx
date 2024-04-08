import React from 'react';
import { action } from '@storybook/addon-actions';
import Snackbar from '../src/index.jsx';

export default {
	component: Snackbar,
	title: 'Snackbar',
	argTypes: {
		kind: {
			options: ['default', 'info', 'error', 'success', 'warning'],
			control: { type: 'select' }
		}
	},
	args: {
		onClose: action('onClose Called'),
	},

};

const Template = (args) => <Snackbar {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: false,
	message: 'Test Message text 1',
	kind: 'default',
};