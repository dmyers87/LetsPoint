// exports.addUserToFirestore = functions.auth.user().onCreate(persistAuthDataInDB({ admin }));

module.exports = ({ admin }) => user => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName || '',
      email: user.email,
      photoURL: user.photoURL || '',
      orgs: {},
      meetings: {},
    });
};
