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
import SearchBox from '@/components/searchBox';

export default {
  title: 'SearchBox',
  component: SearchBox,
} as Meta;

const Template: Story<ComponentProps<typeof SearchBox>> = (args) => <SearchBox {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  displayForm: true,
  redirect: '/',
};
