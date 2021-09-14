import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Custom/<%= classify(name) %>',
    component: <%= classify(name) %>,
    decorators: [
        moduleMetadata({
            imports: [
                SharedModule
            ]
        })
    ]
} as Meta;

const Template: Story<<%= classify(name) %>> = (args: <%= classify(name) %>) => ({
    component: <%= classify(name) %>,
    props: args
});

export const Basic = Template.bind({});
Basic.args = {
};





