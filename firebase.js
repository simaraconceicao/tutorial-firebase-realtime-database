import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyB-4z4-_9PVCWq1_W0k99x8_sXIyPvOSU4",
  authDomain: "tutorial-mbm.firebaseapp.com",
  projectId: "tutorial-mbm",
  storageBucket: "tutorial-mbm.appspot.com",
  messagingSenderId: "899773731629",
  appId: "1:899773731629:web:6b90da42e885abdd0c39a4",
  databaseURL: "https://tutorial-mbm-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

function createNewUser() {
  const userListRef = ref(database, 'users');
  const newUserRef = push(userListRef);

  set(newUserRef, {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value
  });
  
  confirm('Cadastro realizado com sucesso')
}

const buttonElement = document.getElementById('btn')
buttonElement.addEventListener('click', createNewUser)