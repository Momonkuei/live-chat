import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const signup = async (email, password, displayName) => {
	// 設置 error 清空
	error.value = null;

	console.log(projectAuth);

	try {
		const res = await projectAuth.createUserWithEmailAndPassword(
			email,
			password
		);

		if (!res) {
			throw new Error('Could not complete the signup');
		}

		await res.user.updateProfile({ displayName });

		console.log(res.user);

		error.value = null;

		return res;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
	}
};

const useSignup = () => {
	return {
		error,
		signup,
	};
};

export default useSignup;
