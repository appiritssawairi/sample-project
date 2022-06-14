import React from 'react';

export const ViewFlagValue = (props) => {
    return　<p>{props.flag ? '有効'　: '無効'}</p>;
};
