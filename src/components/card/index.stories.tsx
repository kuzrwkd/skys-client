/**
 * React
 */
import { ComponentProps } from 'react';

/**
 * StoryBook
 */
import { Story, Meta } from '@storybook/react';

/**
 * Components
 */
import Card from '@/components/card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<ComponentProps<typeof Card>> = (args) => <Card {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {};
