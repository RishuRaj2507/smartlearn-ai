const profiles = require(
    "../data/userProfiles"
  );
  
  const getUserProfile = (
    employeeId
  ) => {
    return profiles.find(
      (user) =>
        user.employeeId === employeeId
    );
  };
  
  module.exports = {
    getUserProfile,
  };