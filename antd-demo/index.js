import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

function disabledDate(current,value) {
  // can not select days before today and today
  return current && current.valueOf() < Date.now() || 
         current > new Date("2017-09-01");
}

ReactDOM.render(
	<div style={{ width: 400, margin: '100px auto' }}>
    <DatePicker
      format="YYYY-MM-DD"
      disabledDate={disabledDate}
    />
  </div>,
 document.getElementById('root'));
