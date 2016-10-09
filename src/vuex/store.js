import Vue from 'vue';
import Vuex from 'vuex';

// Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		currentNote: null
	},
	mutations: {
		switchCurrentNote (state, note) {
			state.currentNote = note;
		},
		changeCurrentNoteContent (state, content) {
			state.currentNote.content = content;
		}
	},
	getters: {
		currentNote(state){
			return state.currentNote;
		},
		/*currentNoteContent(state, getters){
			return getters.content;
		}*/
	},
	actions:{

	}
});

export default store;
