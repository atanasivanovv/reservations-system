import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import GooglePayButton from '@google-pay/button-react';

function GooglePay({ setProcessingPayment }) {
	const navigate = useNavigate();

	const handlePaymentResolved = () => {
		setProcessingPayment(true);
		setTimeout(() => {
			setProcessingPayment(false);
			navigate('/');
		}, 1000);
	};

	return (
		<GooglePayButton
			environment='TEST'
			paymentRequest={{
				apiVersion: 2,
				apiVersionMinor: 0,
				allowedPaymentMethods: [
					{
						type: 'CARD',
						parameters: {
							allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
							allowedCardNetworks: ['MASTERCARD', 'VISA'],
						},
						tokenizationSpecification: {
							type: 'PAYMENT_GATEWAY',
							parameters: {
								gateway: 'example',
								gatewayMerchantId: 'exampleGatewayMerchantId',
							},
						},
					},
				],
				merchantInfo: {
					merchantId: '12345678901234567890',
					merchantName: 'Demo Merchant',
				},
				transactionInfo: {
					totalPriceStatus: 'FINAL',
					totalPriceLabel: 'Total',
					totalPrice: '1',
					currencyCode: 'USD',
					countryCode: 'US',
				},
				shippingAddressRequired: true,
				callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
			}}
			onLoadPaymentData={(paymentRequest) => {
				console.log('Success', paymentRequest);
			}}
			onPaymentAuthorized={(paymentData) => {
				console.log('Payment Authorised Success', paymentData);
				return { transactionState: 'SUCCESS' };
			}}
			onPaymentDataChanged={(paymentData) => {
				console.log('On Payment Data Changed', paymentData);
				return {};
			}}
			onCancel={handlePaymentResolved}
			existingPaymentMethodRequired='false'
			buttonColor='black'
			buttonType='Buy'
		/>
	);
}

GooglePay.propTypes = {
	setProcessingPayment: PropTypes.func.isRequired,
};

export default GooglePay;
