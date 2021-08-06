import React, { useState} from 'react';
import Header2 from '../layout/header2';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import { Tabs,Tab,} from 'react-bootstrap';
import AreaChart from '../charts/area';



function Dashboard() {

    const [tab, setTab] = useState("buy")

    return (
        <>
            <Header2 />
            
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                       

                        <div className="col-xl-9 col-lg-8 col-xxl-8">
                            <div className="card profile_chart">
                                <div className="card-header py-0">
                                    <div className="chart_current_data">
                                        <h3>254856 <span>USD</span></h3>
                                        <p className="text-success">125648 <span>USD (20%)</span></p>
                                    </div>
                                    {/* <div className="duration-option">
                                        <Linkid="all" className="active">ALL</Link>
                                        <Linkid="one_month" className="">1M</Link>
                                        <Linkid="six_months">6M</Link>
                                        <Linkid="one_year" className="">1Y</Link>
                                        <Linkid="ytd" className="">YTD</Link>
                                    </div> */}
                                </div>
                                <div className="card-body">
                                    <AreaChart />
                                    <div className="chart-content text-center">
                                        <div className="row">
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">24hr Volume</p>
                                                    <h5>$1236548.325</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Market Cap</p>
                                                    <h5>19B USD</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Circulating Supply</p>
                                                    <h5>29.4M BTC</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">All Time High</p>
                                                    <h5>19.783.06 USD</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-xxl-12">
                            <div className="card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="buy-sell-widget">

                                        <Tabs activeKey={tab} onSelect={e => setTab(e)}       id="controlled-tab-example"
>
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
                                            <Tab  eventKey="sell" title="Sell" tabClassName={tab === "sell" && "bg-danger"}>
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
            </div>

            <Footer2 />
        </>
    )
}

export default Dashboard;