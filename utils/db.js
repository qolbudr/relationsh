import { db } from './firebase'
import { doc, collection, onSnapshot, query, orderBy } from "firebase/firestore";

export const fetchBoard = (uid, board, setBoard) => {
	const collectionPath = 'board/' + uid + '/data';

	onSnapshot(query(collection(db, collectionPath), orderBy('timestamp', 'desc')), (snapshot) => {
		const boards = []
		snapshot.forEach((board) => {
			boards.push(board.data())
		})

		setBoard(boards)
	});
}