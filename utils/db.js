import { db } from './firebase'
import { doc, getDoc, collection, onSnapshot, query, orderBy, addDoc } from "firebase/firestore";

export const fetchBoard = (uid, board, setBoard) => {
	const collectionPath = 'boards/' + uid + '/data';

	onSnapshot(query(collection(db, collectionPath), orderBy('timestamp', 'desc')), (snapshot) => {
		const boards = []
		snapshot.forEach((board) => {
			boards.push(board.data())
		})

		setBoard(boards)
	});
}

export const fetchUser = async (uid, user, setUser) => {
	const docs = await getDoc(doc(db, 'users', uid))
	const userdata = docs.data()
	setUser(userdata)
}

export const addBoard = async (uid, formData) => {
	const docRef = await addDoc(collection(db, "boards", uid, 'data'), {
		...formData,
		timestamp: Date.now()
	});

	return docRef.id;
}