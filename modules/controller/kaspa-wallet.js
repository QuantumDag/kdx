import {QuantumdagWallet as BaseQuantumdagWallet} from '/node_modules/@quantumdag_/ux/qtm-ux.js';

class QuantumdagWallet extends BaseQuantumdagWallet{
	makeFaucetRequest(subject, args){
		let origin = 'https://faucet.qtmnet.io';
		//origin = 'http://localhost:3000';
		const {address, amount} = args;
		let path = {
			'faucet-available': `available/${address}`,
			'faucet-request': `get/${address}/${amount}`
		}[subject];

		if(!path)
			return Promise.reject("Invalid request subject:"+subject)

		return fetch(`${origin}/api/${path}`, {
			method: 'GET'
		}).then(res => res.json())
	}
}

QuantumdagWallet.define("qtm-wallet")
