import UserSettingsForm from "./UserSettingsForm";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-center">Settings Page</h1>
      <p className="text-center">Some user settings specific content</p>
      <UserSettingsForm  />
    </div>
  );
};