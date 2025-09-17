// Импортируем Firebase SDK
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

// ВАЖНО: Возьмите этот объект firebaseConfig из вашего файла lib/firebase_options.dart
// для платформы 'web'
const firebaseConfig = {
  apiKey: "AIzaSyAA0Yo0X3C1KS9wSSgf-gMMFEtUS1iZmu0",
  authDomain: "crestlink-afe90.firebaseapp.com",
  projectId: "crestlink-afe90",
  storageBucket: "crestlink-afe90.firebasestorage.app",
  messagingSenderId: "1093217722003",
  appId: "1:1093217722003:web:6da0441341c6a01a77f766",
  measurementId: "G-JMH4DWFSBM"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Этот обработчик нужен для уведомлений, когда вкладка неактивна
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});