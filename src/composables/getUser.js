import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const user = ref(projectAuth.currentUser); //如果已經登入，就是這個值，如果不是重新登入

projectAuth.onAuthStateChanged(_user => {
	// console.log('User state change. Current iser is:', _user);
	user.value = _user;
});

const getUser = () => {
	return { user };
};

export default getUser;
