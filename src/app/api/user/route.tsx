export const GET = async () => {
  return {
    status: 200,
    body: {
      userId: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
    },
  };
};