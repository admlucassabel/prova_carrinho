import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: functions.config().private.key.replace(/\\n/g, '\n'),
    projectId: functions.config().project.id,
    clientEmail: functions.config().client.email
  }),
  databaseURL: 'https://[prova-carrinho].firebaseio.com'
})

const db = admin.firestore()
const entry = db.collection('entries').doc()

const entryObject = {
  id: entry.id,
  title: 'entry title here',
  text: 'entry text here'
}

entry.set(entryObject)

export { admin, db }