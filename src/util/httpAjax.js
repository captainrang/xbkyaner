import axios from "axios";

export function httpAjax(method, url, data, config) {
	let promise = new Promise((resolve, reject) => {
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


