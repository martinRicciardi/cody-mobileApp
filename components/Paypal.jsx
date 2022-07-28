import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import axios from 'axios';
import WebView from 'react-native-webview';

export default class Paypal extends Component {

    state = {
        accessToken: null,
        approveUrl: null,
        paymentId: null
    }

    componentDidMount() {
        const dataDetail = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "total": '0.01',
                    "currency": "USD",
                    "details": {
                        "subtotal": "0.01",
                        "tax": "0",
                        "shipping": "0",
                        "handling_fee": "0",
                        "shipping_discount": "0",
                        "insurance": "0"
                    }
                }
            }],
            "redirect_urls": {
                "return_url": "https://www.youtube.com/",
                "cancel_url": "https://google.com",
            }
        }

        fetch('https://api.sandbox.paypal.com/v1/oauth2/token',

            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer "A21AAIMgcShi9XoiHFeGKv67SlWZKuoUrK8JQgq1HYMv-GzYPOVOZp5hN1gqh-n5Gvb5PCQhaj7aYOkMgux30rgJcq6uou6rw"'
                },
                body: 'grant_type=client_credentials'
            }

        )
            .then(res => res.json())
            .then(response => {
                console.log('response===', response);
                this.setState({
                    accessToken: response.acces_token
                })

                fetch('https://api.sandbox.pypal.com/v1/payments/payment',
                    {
                        methor: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${response.access.token}`
                        },
                        body: JSON.stringify(dataDetail)
                    }
                )
                    .then(res => res.json())
                    .then(response => {
                        console.log("response", response);
                        const { id, links } = response;
                        const approvalUrl = links.find(data => data.rel == 'approval_url');
                        console.log('approvalUrl', approvalUrl);
                        this.setState({
                            paymentid: id,
                            approvalUrl: approvalUrl.href
                        })
                    }).catch(err => {
                        console.log({ ...err })
                    })
            }).catch(err => {
                console.log({ ...err })
            })
    }

    _onNavigationStateChange = (webViewState) => {
        console.log('webViewState', webViewState);
        if (webViewState.url.includes('https://youtube.com')) {

            this.setState({
                approvalUrl: null
            })

            const { PayerID, paymentId } = webViewState.url;

            fetch(`https://api.sandbox.pypal.com/v1/payments/payment/${paymentId}/execute`, {
                method: 'POST',
                body: { payer_id: PayerId },

                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.state.accessToken}`
                }
            })
                .then(res => res.json())
                .then(response => {
                    console.log("res", response);
                    if (response.name == "INVALID_RESOURCE_ID") {
                        alert('Error en el pago. Por favor, inténtalo de nuevo.')
                        this.setState({
                            approvalUrl: null
                        })
                        this.props.navigation.pop()
                    }
                }).catch(err => {
                    console.log({ ...err })
                })
        }
    }

    render() {

        const { approvalUrl } = this.state
        return (
            <View style={{ flex: 1 }}>
                {
                    approvalUrl ?
                        <WebView
                            style={{ height: '100%', width: '100%', marginTop: 40 }}
                            source={{ uri: approvalUrl }}
                            onNavigationStateChange={this._onNavigationStateChange}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={false}
                        /> :
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 24, alignSelf: 'center'
                            }}>Por favor, no retrocedas o recargues la página</Text>
                            <ActivityIndicator color={'black'} size={'large'} style={{ alignSelf: 'center', marginTop: 10 }} />
                        </View>
                }
            </View>
        )
    }
}

// No tiene uso por el momento hasta que algún día aprenda a hacerlo
// Copiado de acá: https://www.youtube.com/watch?v=QZEiBXIrtKw