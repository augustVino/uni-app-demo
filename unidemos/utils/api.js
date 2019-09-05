import MinRequest from './MinRequest'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
	return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
	return response.data;
})

// 设置默认配置
minRequest.setConfig((config) => {
	// config.baseURL = 'http://e.dangdang.com/media'
	return config
})


export default {
	apis: {
		LISTENLIST (data) {
			return minRequest.get('../static/data/listen_list.json', data)
		}
	}
}