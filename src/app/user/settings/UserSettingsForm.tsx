export default function UserSettingsForm() {
  return (
    <div >
      <h1 className="text-center">User Settings Form</h1>
      <form action="" className="container flex flex-col max-w-screen-md mx-auto">
        <label htmlFor="username">Username</label>
        <input type="text" className="border-2 border-slate-200 rounded" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input type="email" className="border-2 border-slate-200 rounded" name="email" id="email" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};