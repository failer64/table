// export type BodyType = {
// 	equipmentCosts: number
// 	estimatedProfit: number
// 	machineOperatorSalary: number
// 	mainCosts: number
// 	materials: number
// 	mimExploitation: number
// 	overheads: number
// 	parentId?: number | null
// 	rowName: string
// 	salary: number
// 	supportCosts: number
// 	id?: number
// 	child?: BodyType[]
// }
export interface SmallBodyType {
	equipmentCosts: number
	estimatedProfit: number
	machineOperatorSalary: number
	mainCosts: number
	materials: number
	mimExploitation: number
	overheads: number
	rowName: string
	salary: number
	supportCosts: number
}
export interface FullBodyType extends SmallBodyType {
	id: number
	child: FullBodyType[]
	parentId: number
}

export type ResType = {
	changed: FullBodyType
	current: FullBodyType
}