/* eslint-disable no-console */
import React from 'react';
import Select, { Option, OptGroup } from 'rc-select';
import '../../assets/index.less';

function onChange(value, option) {
  console.log(`selected ${value}`, option);
}

const Test = () => (
  <div>
    <h2>Select OptGroup</h2>
    <div style={{ width: 300 }}>
      <Select
        //placeholder="placeholder"
        //defaultValue="lucy, luke"
        style={{ width: 500 }}
        onChange={onChange}
        mode={"mixed"}
        displayTitle={"search conditions 7 filters"}
        //showSearch={false}
      >
        <OptGroup label="single choice" isMultiChoice={true} >
          <Option value="jack" test-prop="jack-prop" singleKey={"key1"}>
            <b
              style={{
                color: 'red',
              }}
            >
              jack
            </b>
          </Option>
          <Option value="lucy" test-prop="lucy-prop" singleKey={"key1"}>
            lucy
          </Option>
        </OptGroup>
        <OptGroup label="multiple choices">
          <Option value="yiminghe" test-prop="yiminghe-prop">
            yiminghe
          </Option>
          <Option value="mike" test-prop="yiminghe-prop">
            mike
          </Option>
          <Option value="luke" test-prop="yiminghe-prop">
            luke
          </Option>
          <Option value="sean" test-prop="yiminghe-prop">
            sean
          </Option>
        </OptGroup>
      </Select>
    </div>
  </div>
);

export default Test;
/* eslint-enable */
