import React, { Fragment } from 'react';
import styled from 'styled-components';

const data = [
    { "1": '第一笔订单', "2": '2019-12-07', "3": '台', "4": 3, "5": '￥100', "6": '￥300.00', "7": 0, "8": '￥0.00' },
    { "1": '第二笔订单', "2": '2019-12-08', "3": '台', "4": 3, "5": '￥100', "6": '￥300.00', "7": 0, "8": '￥0.00' },
    { "1": '第三笔订单', "2": '2019-12-09', "3": '台', "4": 3, "5": '￥100', "6": '￥300.00', "7": 0, "8": '￥0.00' },
  ];


const InvoiceTmpDiv = styled.div`
  font-size:12px;
  width: 720px;
  .title {
    font-size: 26px;
    color: #B16363;
    text-align: center;
    line-height: 56px;
  }
  .extra {
    color: #B15B16;
    .content {
      color: #181818;
    }
  }
  .height84 {
    height:84px;
  }
  .row {
    border: 1px solid #B16363;
    border-bottom: none;
    color: #B15B16;
    .content {
      color: #181818;
    }
  }
  .last-row {
    .content {
      color: #181818;
    }
    color: #B15B16;
    border-top: 1px solid #B16363;
  }
  .label {
    width: 78px;
    display: inline-block;
    text-align-last: justify;
    text-align: justify;
  }
  .title-label {
    width:52px;
  }
`;

const Row = styled.div`
.col_1 { width: 4.16%; }
.col_2 { width: 8.33%; }
.col_3 { width: 12.5%; }
.col_5 { width: 20.83%; }
.col_6 { width: 25%; }
.col_7 { width: 29.16%; }
.col_8 { width: 33.33%; }
.col_14 { width: 58.33%; }
.col_15 { width: 62.5% }
.col_17 { width: 70.83% }
.col_18 { width: 75%; }
.col_24 { width: 100%; }
`;

const Col = styled.span`
  display: inline-block;
  padding: 8px;
  box-sizing: border-box;
  vertical-align: middle;
  border-left: 1px solid #B16363;
  height: 100%;
  &.no-border {
    border-left: none;
  }
  .text-center {
    text-align: center;
  }
`;

const Item = styled.div`
  padding: 12px 0;
  .item {
    text-align: center;
    color: #181818;
    padding: 4px 0;
  }

`

export default class InvoiceTmp extends React.Component {
  
  renderDetailsItem = (field) => {
    return <Item key='1'>
      {(data || []).map((item, idx) => <div className='item' key={`${field}-${idx}`}>{item[field]}</div>)}
    </Item>;
  }

  render() {
    return (
      <InvoiceTmpDiv>
        <Row >
            <Col className='title col_18 no-border'>XX市增值税XX票XX发票</Col>
            <Col className='extra col_6 no-border'>
                <div><span className='label title-label'>发票代码</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
                <div><span className='label title-label'>发票号码</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
                <div><span className='label title-label'>开票日期</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
                <div><span className='label title-label'>校验码</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
            </Col>
        </Row>
        <Row className ='row height84'>
            <Col className='col_1 no-border'>购买方</Col>
            <Col className='col_15'>
              <div><span className='label'>名称</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
              <div><span className='label'>纳税人识别号</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
              <div><span className='label'>地址及电话</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
              <div><span className='label'>开户行及账号</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
            </Col>
            <Col className='col_1'>密码区</Col>
            <Col className='col_6'></Col>
        </Row>
        <Row className ='row'>
            <Col className='col_7 no-border'>
              <div className='text-center'>订单名称/订单号</div>
              {this.renderDetailsItem('1')}
            </Col>
            <Col className='col_5'>
              <div className='text-center'>规格型号</div>
              {this.renderDetailsItem('2')}
            </Col>
            <Col className=''>
              <div className='text-center'>单位</div>
              {this.renderDetailsItem('3')}
            </Col>
            <Col className=''>
              <div className='text-center'>数量</div>
              {this.renderDetailsItem('4')}
            </Col>
            <Col className='col_2'>
              <div className='text-center'>单价</div>
              {this.renderDetailsItem('5')}
            </Col>
            <Col className='col_3'>
              <div className='text-center'>金额</div>
              {this.renderDetailsItem('6')}
            </Col>
            <Col className=''>
              <div className='text-center'>税率</div>
              {this.renderDetailsItem('7')}
            </Col>
            <Col className='col_2'>
              <div className='text-center'>税额</div>
              {this.renderDetailsItem('8')}
            </Col>
        </Row>
        <Row className ='row'>
            <Col className='col_15 no-border'>价税合计（大写）玖佰元整</Col>
            <Col className='no-border' style={{borderLeft: 'none'}}>（小写）<span>￥900.00</span></Col>
        </Row>
        <Row className ='row height84'>
            <Col className='col_1 no-border'>销售方</Col>
            <Col className='col_14'>
              <div><span className='label'>名称</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
              <div><span className='label'>纳税人识别号</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
              <div><span className='label'>地址及电话</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
              <div><span className='label'>开户行及账号</span>：<span className='content'>xxxxxxxxxxxxxxxx</span></div> 
            </Col>
            <Col className='col_1'>备注</Col>
            <Col className='col_7'></Col>
        </Row>
        <Row className ='last-row'>
            <Col className='col_6 no-border'>收款人：<span className='content'>XXX公司</span></Col>
            <Col className='col_6 no-border'>复核：</Col>
            <Col className='col_6 no-border'>开票人：</Col>
            <Col className='col_5 no-border'>销售方：（章）</Col>
        </Row>
      </InvoiceTmpDiv>
    );
  }
}