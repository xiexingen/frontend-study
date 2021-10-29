/**
 * title: 简单案例
 * desc: 请打开浏览器查看
 */
import React from 'react';
import { Button, Space } from 'antd';
import '..';

export default () => {
  const print = () => {
    const result = [1, 2, 3, 4]['myReduce']((pre, cur) => {
      return pre + cur;
    }, 10);
    console.log(result);
  };
  return (
    <>
      <Space>
        <Button onClick={print}>Print</Button>
      </Space>
    </>
  );
};
