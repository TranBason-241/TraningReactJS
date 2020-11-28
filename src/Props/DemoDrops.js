import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoDrops extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center" > Danh Sách sản phẩm</h3>
            <div className="row">
                <div className="col-3">
                    <ProductRFC  name="Iphone" price="100" />
                </div>
                <div className="col-3">
                    <ProductRFC  name="SAMSUNG" price="100" />
                </div>
                <div className="col-3">
                    <ProductRFC name="XIAOMI" price="100" />
                </div>
                <div className="col-3">
                    <ProductRFC name="Sony" price="100"/>
                </div>
                

            </div>

            </div>
        )
    }
}


