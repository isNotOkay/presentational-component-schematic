import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Dashboard/<%= classify(name) %>',
    component: <%= classify(name) %>Component,
    decorators: [
        moduleMetadata({
            imports: [
                SharedModule
            ]
        })
    ]
} as Meta;

const Template: Story<<%= classify(name) %>Component> = (args: <%= classify(name) %>Component) => ({
    component: <%= classify(name) %>Component,
    props: args
});

export const Basic = Template.bind({});
Basic.args = {
};





