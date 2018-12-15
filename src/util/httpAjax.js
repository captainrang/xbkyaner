import axios from "axios";

export function httpAjax(method, url, data, config) {
	let promise = new Promise((resolve, reject) => {
    console.log(data);
		axios[method](url, data, config).then(result => {
			if (result.status === 200) {
        resolve(result.data);
      }else{
        reject(result);
      }
		}).catch(result => {
			reject(result);
		});
	});
	return promise;
}

// 测试接口
export const serviceURL = 'http://localhost:8081/wte/';

// oauth 验证参数
export const client_id = 'app';
export const client_secret = 'app_secure';
export const grant_type = 'password';