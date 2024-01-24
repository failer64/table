import { FullBodyType } from "../types";


export function recursiveDelete(arr: FullBodyType[], id: number): FullBodyType[] {

	const x = arr.filter((item) => {
		if (item.id !== id) {
			return recursiveDelete(item.child, id);
		}
		return item.id !== id;
	});

	x.map((item) => {
		item.child = recursiveDelete(item.child, id);
		return item;
	});

	return x;
}

function searchItem(arr: FullBodyType[], id: number, row: FullBodyType): any {
	const el = arr.find((item) => {
		if (item.id !== id) {
			return searchItem(item.child, id, row);
		}
		return item.id === id;
	});

	if (el && el.id === id) {
		el.child.push(row);
	}

	return el //?? {} as FullBodyType;
}

export function recursiveAdd(
	arr: FullBodyType[],
	id: number,
	row: FullBodyType
): FullBodyType[] {
	const el = searchItem(arr, id, row);

	const x = arr.map(item => item.id === el?.id ? el : searchItem(item.child, id, row));

	return x;
}
