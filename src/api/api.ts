import { FullBodyType, SmallBodyType } from './../types/index';
import { USER_ID, instance } from "."


export const userAPI = {
	async getTreeRows() {
		const response = await instance.get(`${USER_ID}/row/list`)
		return response.data
	},
	async createRowInEntity(body: FullBodyType) {
		const response = await instance.post(`${USER_ID}/row/create`, { ...body })
		return response.data
	},
	async updateRow(id: number | undefined, body: SmallBodyType) {
		const response = await instance.post(`${USER_ID}/row/${id}/update`, { ...body })
		return response.data
	},
	async deleteRow(id: number) {
		const response = await instance.delete(`${USER_ID}/row/${id}/delete`)
		return response.data
	},
}