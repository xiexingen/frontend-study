/**
 * title: apply仿写
 * desc: 请打开控制台查看
 */
import React from 'react';
import { Button, Space } from 'antd';
import '..';

export default () => {
  const print = () => {
    function test(name, sex) {
      // @ts-ignore
      console.log(this, name, sex);
    }

    // @ts-ignore
    test.myApply(null, ['xxg', '男']);
    // @ts-ignore
    test.myApply({ name: 'XXG', sex: 'boy' }, ['xxg', '男']);
  };

  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};