<template>
	<div class="container">
		<navbar></navbar>
		<chat-window></chat-window>
		<new-chat-form></new-chat-form>
	</div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import getUser from '../composables/getUser';
import NewChatForm from '../components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';

export default {
	components: { Navbar, NewChatForm, ChatWindow },
	setup() {
		const { user } = getUser();
		const router = useRouter();

		watch(user, () => {
			if (!user.value) {
				router.push({ name: 'Welcome' });
			}
		});

		return {
			user,
		};
	},
};
</script>
