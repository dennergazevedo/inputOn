import React from 'react';

import { Disq } from './styles';

interface IProps{
    config: {
        url: string;
        identifier: string;
        title: string;
    }
}

const Comments: React.FC<IProps> = (props: IProps) => {
  return <Disq config={props.config} />;
}

export default Comments;