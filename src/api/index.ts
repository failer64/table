import axios from "axios";

export const USER_ID = 125030;

export const instance = axios.create({
	baseURL: 'http://185.244.172.108:8081/v1/outlay-rows/entity/',
});
