import { WithContext, onCreateHandler } from './index';

const logMeetingCreate: WithContext<onCreateHandler> = globalContext => (snapshot, context) => {
  const db = globalContext.firestore();

  const numShards = 10;

  // Select a shard of the counter at random
  const dateDoc = new Date().toISOString().substr(0, 'YYYY-MM'.length);
  const shardID = 'shard' + Math.floor(Math.random() * numShards).toString();

  const shardRef = db
    .collection('analytics')
    .doc('meetingCreates')
    .collection(dateDoc)
    .doc(shardID);

  return db.runTransaction(async t => {
    const doc = await t.get(shardRef);
    const data = doc.data();
    const currentCount = data && data.count ? data.count : 0;
    t.set(shardRef, { count: currentCount + 1 });

    return null;
  });
};

export default logMeetingCreate;
