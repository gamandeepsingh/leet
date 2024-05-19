import SearchReload from "./SearchReload";
import StudentList from "./StudentList";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full px-5 py-5 space-y-3 w-full">
      <SearchReload />
      <StudentList />
    </div>
  );
};

export default Dashboard;
