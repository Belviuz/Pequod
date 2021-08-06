import React, { } from 'react';
 import { Link } from 'react-router-dom';
import { Accordion, Tabs,Tab, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import Popup from '../element/popup';



function BuySell() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="buy-sell-widget">

                                        <Tabs defaultActiveKey="buy" id="uncontrolled-tab-example">
                                            <Tab eventKey="buy" title="Buy">
                                                <form method="post" name="myform" className="currency_validate">
                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Currency</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Payment Method</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Enter your amount</label>
                                                        <div className="input-group">
                                                            <input type="text" name="currency_amount" className="form-control"
                                                                placeholder="0.0214 BTC" />
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                placeholder="125.00 USD" />
                                                        </div>
                                                        <div className="d-flex justify-content-between mt-3">
                                                            <p className="mb-0">Monthly Limit</p>
                                                            <h6 className="mb-0">$49750 remaining</h6>
                                                        </div>
                                                    </div>
                                                    <button type="submit" name="submit"
                                                        className="btn btn-success btn-block">Exchange
                                                    Now</button>

                                                </form>
                                            </Tab>
                                            <Tab eventKey="sell" title="Sell">
                                                <form method="post" name="myform" className="currency2_validate">
                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Currency</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Payment Method</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Enter your amount</label>
                                                        <div className="input-group">
                                                            <input type="text" name="currency_amount" className="form-control"
                                                                placeholder="0.0214 BTC" />
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                placeholder="125.00 USD" />
                                                        </div>
                                                        <div className="d-flex justify-content-between mt-3">
                                                            <p className="mb-0">Monthly Limit</p>
                                                            <h6 className="mb-0">$49750 remaining</h6>
                                                        </div>
                                                    </div>
                                                    <button type="submit" name="submit"
                                                        className="btn btn-success btn-block">Exchange
                                                    Now</button>

                                                </form>
                                            </Tab>
                                        </Tabs>
                                        
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>

                   
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default BuySell;