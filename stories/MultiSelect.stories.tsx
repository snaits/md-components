import React from 'react';
import { useArgs } from '@storybook/client-api';
import MdMultiSelect from '../packages/react/src/formElements/MdMultiSelect';

export default {
  title: 'Form/Multiselect',
  component: MdMultiSelect,
  parameters: {
    docs: {
      description: {
        component: 'A form component for multi-select.',
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: "The label for the selct box.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    options: {
      type: { name: 'array', required: true },
      description: "Array with data objects for select options",
      table: {
        type: {
          summary: "[{ value: string | number, text: 'string' }, { value: string | number, text: 'string' }, ...]",
        },
      },
    },
    selected: {
      type: { name: 'array' },
      description: "The currently selected values. This corresponds to `value` from selected `options`",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "[number | string, number | string, ...]",
        },
      }
    },
    disabled: {
      type: { name: 'boolean' },
      description: "Is the multi select disabled?",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    size: {
      description: 'Set size og select box',
      options: ['large', 'medium', 'small'],
      table: {
        defaultValue: { summary: 'large' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    helpText: {
      type: { name: 'string' },
      description: "Help text for the select box",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    error: {
      type: { name: 'boolean' },
      description: "Does the multi select contain an error?",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    errorText: {
      type: { name: 'string' },
      description: "Error text for the select box, displayed if `error = true`",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    hideChips: {
      type: { name: 'boolean' },
      description: "Toggle whether chips with selected options are displayed or not.",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    onChange: {
      type: { name: 'function' },
      description: "The onChange handler for change events. Returns the clicked option, to handle as you please.",
      table: {
        type: {
          summary: "function",
        },
      },
    }
  }
}

type OptionType = {
  text: string;
  value: string | number;
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleChange = (option: OptionType) => {
    let newSelected = args.selected;
    if (args.selected && args.selected.includes(option.value)) {
      newSelected = args.selected.filter((item: any) => {
        return item !== option.value
      })
    } else {
      newSelected.push(option.value);
    }
    updateArgs({ ...args, selected: newSelected });
  }

  return (
    <MdMultiSelect
      {...args}
      onChange={handleChange}
    />
  );
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  label: 'Label',
  options: [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
    { value: 'option4', text: 'Option 4' },
  ],
  selected: ['option1'],
  disabled: false,
  hideChips: false,
  size: 'large',
  helpText: '',
  error: false,
  errorText: ''
};
