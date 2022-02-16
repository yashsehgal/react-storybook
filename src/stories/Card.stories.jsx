import React from 'react';

import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card
}

const Template = (args) => (<Card>
  <h2>This is a card heading</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Accusantium accusamus omnis labore velit? Minus 
    unde delectus possimus. Doloremque reiciendis, 
    quos recusandae fugiat velit voluptatibus 
    numquam perspiciatis voluptatum! Id, voluptatem 
    dignissimos?
    </p>
</Card>);

export const DefaultTemplate = Template.bind({});