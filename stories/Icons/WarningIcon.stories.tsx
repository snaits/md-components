import React from 'react';

import MdWarningIcon from '../../packages/react/src/icons/MdWarningIcon';
import MdWarningIcon64 from '../../packages/react/src/icons/MdWarningIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Warning',
  component: MdWarningIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Warning icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdWarningIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdWarningIcon64 } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    className: {
      description: 'Classes for svg icon',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    color: {
      description: 'Set color of parent (for example purposes)',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color',
    },
  },
};

const Template = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdWarningIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdWarningIcon64 className={args.className} />
    </div>
  );
};

export const WarningIcon = Template.bind({});
WarningIcon.args = {
  className: '',
  color: '#ca0000',
};

export const WarningIcon64 = Template64.bind({});
WarningIcon64.args = {
  className: '',
  color: '#ca0000',
};
